import {EVENT} from '../type'

const intialState = []

const event = (state=intialState, action) => {
    switch(action.type){
        case EVENT:
            return state.concat([action.payload])
        default:
            return state
    }
}

export default event;