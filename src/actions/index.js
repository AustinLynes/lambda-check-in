import axios from "axios"

export const DATA_FETCH_START = 'DATA_FETCH_START'
export const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS'
export const DATA_FETCH_FAILED = 'DATA_FETCH_FAILED'
export const LOG_IN_START = 'LOG_IN_START'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_CHECK = 'LOG_IN_CHECK'

export const getData = (credentals,route) => dispatch => {
    dispatch({ type: DATA_FETCH_START })
    axios
        .get(`http://localhost:8000/${route}`, credentals)
        .then(res => {
            dispatch({
                type: DATA_FETCH_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => dispatch({ type: DATA_FETCH_FAILED, payload: err }))
}

export const setLoggedIn = (userid) => dispatch => {
    dispatch({ type: LOG_IN_START })
    axios
        .put(`http://localhost:8000/users/${userid}`)
        .then(res => {
            // console.log('res::', res)
            dispatch({
                type: LOG_IN_SUCCESS,
                payload: res.data
            })
        })
}
export const statusCheck = (log) => dispatch=>{
    if(window.localStorage.getItem('log_status') === true){
        setLoggedIn(window.localStorage.getItem('user').id)
    }
}
export const logOut = ()=>dispatch=>{
    dispatch({type:LOG_OUT})
}