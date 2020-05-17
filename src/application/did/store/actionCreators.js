import * as actionTypes from './constances'

export const deleteDidList= (data)=>({
    type: actionTypes.DELETE_DIDLIST,
    data
})

export const addDidList= (data)=>({
    type: actionTypes.ADD_DIDLIST,
    data
})