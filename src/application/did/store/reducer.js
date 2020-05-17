import {fromJS} from 'immutable'
import * as actionTypes from './constances'

const defaultState = fromJS({
    didList:["睡觉","吃饭","敲代码","看b站","跑步"]
})

export default (state= defaultState,action)=>{
    switch(action.type){
        case actionTypes.DELETE_DIDLIST:
            return state.set('didList',state.get('didList').splice(action.data,1));
        case actionTypes.ADD_DIDLIST:
            return state.set('didList',state.get('didList').concat([action.data]));
        default:
            return state;
    }
}