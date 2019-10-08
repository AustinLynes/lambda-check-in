import React, {useEffect} from 'react'
import Router from '../router/Router'
import Topbar from '../static/Topbar'
import Navigation from '../static/Navigation'
import {connect}from 'react-redux'
import {statusCheck} from '../../actions'
const App = props => {
    useEffect  (()=>{
        props.statusCheck(props.log)
    },[])
    return (
        <div className='app'>
            <Topbar />
            <Navigation/>
            <Router />
        </div>
    )
}
const mapStateToProps =state=> {
    return {
        log: state.log
    }
}
export default connect(mapStateToProps, {statusCheck})(App)