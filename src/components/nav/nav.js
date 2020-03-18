import React from 'react'
import './styles.css'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = (props) => {

    return (
    <>
        { (props.auth) ?
        <> 
            <div className='nav'>
            <NavLink className='a' to='/' exact activeClassName='navActive'>
                <i className='material-icons'>home</i>
            </NavLink>
            <NavLink className='a' to='/post/create' activeClassName='navActive'>
                <i className='material-icons'>add_a_photo</i>
            </NavLink>
            <NavLink className='a' to='/search' activeClassName='navActive'>
                <i className='material-icons'>search</i>
            </NavLink>
            <NavLink className='a' to='/profile' activeClassName='navActive'>
                <i className='material-icons'>person</i>
            </NavLink>
            </div>
        </>
        : <Redirect to='/login' /> }
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.user
    }
}
 
export default connect(mapStateToProps)(Nav)
