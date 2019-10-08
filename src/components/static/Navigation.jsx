import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logOut} from '../../actions'
const Navigation = (props) => {
    return (
        <div className='navigation'>
            {
                props.isLoggedIn ?
                    <Link to='/' className='btn'>
                     <p onClick={props.logOut}>logout</p>
                    </Link>
                    :
                    <Link  to='/login' className='btn'>
                        <p>Login</p>
                    </Link>
            }
        </div>
    )

}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.log.isLoggedIn 
    }
}
export default connect(mapStateToProps, {
    logOut
})(Navigation)