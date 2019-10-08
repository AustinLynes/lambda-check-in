import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getData, setLoggedIn } from '../../actions'
import { Link } from 'react-router-dom'
const Login = props => {
    const [payload, setPayload] = useState({
        name:'',
        password:''
    })
    useEffect(() => {
        props.getData('users')
       
    }, [])
    const submit = e => {
        // e.preventDefault();
        props.users.map(user => {
            if (payload.email === user.email && payload.password === user.password) {
                alert(`${user.name} is trying to log in`)
                props.setLoggedIn(user.id)
            }
        })


    }
    const handlechange = e => {
        e.preventDefault();
        setPayload({ ...payload, [e.target.name]: e.target.value })
    }
    return (
        <form className='login-form' onSubmit={submit}>
            <input className='inp' name='email' type='email' placeholder='email' onChange={handlechange} />
            <input className='inp' name='password' type='password' placeholder='password' onChange={handlechange} />
            <div className='forgot'>
                <p>remember me?</p>
                <input type='checkbox' />
            </div>
            <Link className='link' to={`/${payload.email!== '' && payload.password!==''?'dashboard':'/login'}`}>
                <button onClick={submit} type='submit'>Login</button>
            </Link>
        </form>
    )
}
const mapStateToProps = state => {
    return {
        users: state.data.users,
        user: state.log.user
    }
}
export default connect(mapStateToProps, { getData, setLoggedIn })(Login)