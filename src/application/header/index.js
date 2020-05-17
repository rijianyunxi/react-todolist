import React from 'react';
import { connect } from 'react-redux'
import {changeInputValue} from './store/actionCreators'
import * as actionCreators from '../todo/store/actionCreators'

const Header = (props)=>{
    return(
        <div className="head">
            <input value={props.inputValue} onChange={ props.handleInputChange } /><button onClick={()=>{props.addTodoList(props.inputValue)}}> 添加</button>
        </div>
    )
}

const mapState = (state)=>{
    return{
        inputValue: state.getIn(['header','inputValue'])
    }
}

const mapDispatch = (dispatch)=>{
    return{
        handleInputChange(e){
            dispatch(changeInputValue(e.target.value));
        },
        addTodoList(data){
            if(data.length>0){
                dispatch(actionCreators.addTodoList(data));
                dispatch(changeInputValue(''));
            }
        }
    }
}
export default connect(mapState,mapDispatch)(Header);