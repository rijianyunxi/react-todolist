import * as actionTypes from './constances'

export const deleteTodoList = (data)=>{
    return{
        type: actionTypes.DELETE_TODOLIST,
        data
    }
}

export const addTodoList = (data)=>({
    type:actionTypes.ADD_TODOLIST,
    data
})