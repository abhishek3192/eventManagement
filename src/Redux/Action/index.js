import {EVENT} from '../type'

export const setEvent = (event) => {
    return dispatch => {
        dispatch({
            type: EVENT,
            payload: event
        })
    }
}