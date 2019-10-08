import React, { useState } from 'react'

import { connect } from 'react-redux'
// import { addStudent } from '../../actions'
const StudentForm = props => {
    const [payload, setPayload] = useState({
        name: ''
    })
    const handleSubmit = e => {
        e.preventDefault();
        //HANDLE SEND TO STORE
        // props.addStudent(payload)
    }
    const handleChange = e => {
        e.preventDefault();
        setPayload({
            ...payload, [e.target.name]: e.target.value
        })
    }
    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <input
                    name='name'
                    value={payload.name}
                    onChange={handleChange}
                />
                <button>add student</button>
            </form>
        </div>
    )
}
const mstp = state => { //MAP STATE TO PROPS
    return {

    }
}
export default connect(mstp, {
    // addStudent
})(StudentForm)