import React from 'react';
//import { connect } from 'react-redux'
import Header from './application/header'
import Todo from './application/todo'
import Did from './application/did'

const App = (props) => {
	return (
		<div>
			{/* <h1>hello {props.inputValue}</h1>
			<input onChange={props.changeInputValue} /> */}
			<Header/>
			<Todo/>
			<Did/>
		</div>
	)
}
// //把store里的数据映射到组件
// const mapStateToProps = (state) => {
// 	return {
// 		// inputValue: state.inputValue
// 		inputValue: state.get('inputValue')
// 	}
// }
// //store.dispatch , props 把dispatch方法映射到props上
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		changeInputValue(e) {
// 			const action = {
// 				type: "change_input_value",
// 				inputValue: e.target.value
// 			};
// 			dispatch(action);
// 		}
// 	}
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;