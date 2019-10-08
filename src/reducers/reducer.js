import {
    DATA_FETCH_START,
    DATA_FETCH_SUCCESS,
    DATA_FETCH_FAILED
} from '../actions'

export const init = {
    users: [

    ],
    isFetching: false,
    errors: ''
}

export const dataReducer = (state = init, action) => {
    console.log(action)
    switch (action.type) {
        case DATA_FETCH_START:
            return {
                ...state,
                isFetching: true
            }
        case DATA_FETCH_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                isFetching: false,
                errors: ''

            }
        case DATA_FETCH_FAILED:
            return {
                ...state,
                isFetching: false,
                errors: action.errors
            }
        default:
            return state
    }
}  
