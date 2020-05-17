import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer} from '../application/header/store'
import {reducer as didReducer} from '../application/did/store'
import {reducer as todoReducer} from '../application/todo/store'


const reducer = combineReducers({
    header: headerReducer,
    did: didReducer,
    todo: todoReducer
})

export default reducer;