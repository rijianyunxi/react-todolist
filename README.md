# 用react写个todolist

## 前言 

学了很多天的react 对于redux还是迷迷糊糊的，于是就写下todolist来熟练redux和redux-react

## 思路

* 创建reducer,定义初始数据，导出

```
const defaultState = {
    inputValue:'',
    list:[]
}
export default (state=defaultState,action)=>{
    return state;
}
```
* 创建store,引入reducer

```
import { createStore } from 'redux'import { createStore } from 'redux'
import reducer from './reducer'
export default createStore(reducer);
```
* 在index.js里引入provider和store，用provider包裹着需要渲染的组件，provider里传入store,让所有组件都能获得store，不用每个组件引入store文件
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import {Provider} from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
```

* 在子组件中引入connect ，让每个组件和store连接起来,并且创建mapStateToProps和mapDispatchToProps

```
import React from 'react';
import {connect} from 'react-redux'

class App extends React.Component{
    render(){
		return(
		    <div>
				<h1>hello {this.props.inputValue}</h1>
				<input onChange={ this.props.changeInputValue }/>
		    </div>
		)
	}
}
//把store里的数据映射到组件
const mapStateToProps = (state)=>{
	return{
		inputValue: state.inputValue
	}
}
//store.dispatch , props 把dispatch方法映射到props上
const mapDispatchToProps = (dispatch)=>{
	return{
		changeInputValue(e){
			const action = {
				type:"change_input_value",
				value:e.target.value
			};
			dispatch(action);
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
```

* reducer中接收到action,先根据action的type做不同逻辑
* 注意的是要神拷贝一份state，修改的也是新的state，返回的是新的state

```
const defaultState = {
    inputValue:'react',
    list:[]
}
export default (state=defaultState,action)=>{
    if(action.type === "change_input_value"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }
    return state;
}
```

思路大致是这样的，记录下。

## 修改

后来看了下别人写的redux，发现自己写的很多地方不规范，修改了下，每个组件里都创建了store，store里有instances，reducer，actionCreators，然后用index引入再暴露出去，在最外部的reducer用combineReducers集体管理众多的reducer
