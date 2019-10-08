import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const Topbar = props => {
    return (
        <div className='top-bar'>
            <Link to={props.isLoggedIn?'/dashboard':'/'}
            className='logo'>
                <img
                    src='https://uce014a239018cab1df8ff8807de.previews.dropboxusercontent.com/p/thumb/AAnNwb1WiLPzPG9OYMWcYUI1jWrnyKt_L_zGwxrAEnM6TQ7kGBT7J1ZVyXOrJOwLP2haWFoVYF7Wm9RSvz9fNwK2-ab0GFuGqYjhLa6tSIKw1TYBTeqhIsOv8eW4hs6_6xDHdinb8A9s-HzXutpRLVzMNelyZ7BPo8hdCY9nOEw4frl2iBI3f1mONOSeSs_oocLaOZSNb_BQTCznhA6ju5i0soHl3NTXok9rtD4q8m1RsAvySWWprFF3q9ZE6ZRAiYd5gZc17sjqMylGTt51LPZi-4MGrYy8ra7rDu3_mVtWF7-rese54DPYDi_rDkO7q08b6YUcYNYM5SJ_b1I1PuHjXS0yf2EJxjvIe4X_itJj23-9JgnPwU7GxSgRowPTDD0/p.png?fv_content=true&size_mode=5' />
            </Link>
            <h1 className='title'>Check-in</h1>
            {console.log(props.isLoggedIn)}
            {props.isLoggedIn ?
                <h1 className='title'>
                { props.user.username }
                </h1>
                : <h1></h1>}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        user: state.log.user,
        isLoggedIn: state.log.isLoggedIn
    }
}
export default connect(mapStateToProps, {

})(Topbar)