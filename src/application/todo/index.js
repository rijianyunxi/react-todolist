import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import { addDidList } from '../did/store/actionCreators'

const Todo = (props) => {
    return (
        <div className="todo">
            <h1>待做：</h1>
            {

                props.todoList.map((r, i) => {
                    return (
                        <li key={i} onClick={() => { props.deleteTodoList(i, r) }}>{r}</li>
                    )
                })
            }
        </div>
    )
}

const mapState = (state) => {
    return {
        todoList: state.getIn(['todo', 'todoList'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        deleteTodoList(i, r) {
            dispatch(actionCreators.deleteTodoList(i))
            dispatch(addDidList(r))
        }
    }
}

export default connect(mapState, mapDispatch)(Todo);