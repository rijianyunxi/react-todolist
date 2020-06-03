import {fromJS} from 'immutable'
import * as actionTypes from './constances'


const defaultState=fromJS({
    todoList:['摘星星','太空人']
})

export default (state= defaultState,action)=>{
    switch(action.type){
        case actionTypes.DELETE_TODOLIST:
            return state.set('todoList',state.get('todoList').splice(action.data,1));
        case actionTypes.ADD_TODOLIST:
            return state.set('todoList',state.get('todoList').concat([action.data]));
        default:
            return state;
    }
}