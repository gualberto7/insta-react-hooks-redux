import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
            <Link className='a' to='/post/create'><i className='material-icons'>add_a_photo</i></Link>
            <Link className='a' to=''><i className='material-icons'>search</i></Link>
            <Link className='a' to=''><i className='material-icons'>favorite</i></Link>
            <Link className='a' to=''><i className='material-icons'>person</i></Link>
        </div>
    )
}
 
export default Nav
