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