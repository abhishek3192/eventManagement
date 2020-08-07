import {combineReducers} from 'redux'
import event from '../Redux/Reducer/index'


const appReducer = combineReducers({
    event: event
})

export default appReducer;