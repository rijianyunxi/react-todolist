import {fromJS} from 'immutable'
import * as actionTypes from './constances'

const defaultState = fromJS({
    inputValue:''
})

export default (state= defaultState,action)=>{
    switch(action.type){
        case actionTypes.INIT_INPUTVALUE:
            return state.set('inputValue',action.data);
        default:
            return state;
    }
}