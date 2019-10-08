import {
    LOG_IN_START, LOG_IN_SUCCESS, LOG_OUT
} from '../actions'
// import { init } from './reducer'

const loggedIn = {
    user: {},
    isLoggedIn: false
}

export const LogReducer = (state = loggedIn, action) => {
    switch (action.type) {
        case LOG_IN_START:
            return {
                ...state,
                isLoggedIn: false
            }
        case LOG_IN_SUCCESS:
            window.localStorage.setItem('log_status', true)
            return {
                ...state,
                user: action.payload[0],
                isLoggedIn: true
            }
        case LOG_OUT:
            window.localStorage.setItem('log_status', false)
            return {
                ...state,
                user: {},
                isLoggedIn: false
            }
        default:
            return state
    }
}
