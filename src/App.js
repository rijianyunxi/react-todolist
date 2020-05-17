import React from 'react';
import './app.css'
import Header from './application/header'
import Todo from './application/todo'
import Did from './application/did'

const App = (props) => {
	return (
		<div className="box">
			<div className="box-head">
				<Header/>
			</div>
			<div className="box-content">
				<Todo/>
				<Did/>
			</div>
		</div>
	)
}
export default App;