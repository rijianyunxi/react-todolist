import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer} from '../application/header/store'

const reducer = combineReducers({
    header: headerReducer
})

export default reducer;