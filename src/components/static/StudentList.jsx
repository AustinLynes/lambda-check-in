import React from 'react'
import { connect } from 'react-redux'

const StudentList = props => {
    return (
        <div className='student-list'>
            {console.log(props.students)}
            {props.students.length > 0 ? props.students.map(student=>{
                return <h1>{student.name}</h1>
            }): <p>you can add students to your class above</p>}
        </div>
    )
}
const mstp = state => {
    return {
        students: state.students
    } 
}
export default connect(mstp, {})(StudentList)