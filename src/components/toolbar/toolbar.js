import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { URL, DEFAULT_USER } from '../GLOBAL'
import './styles.css'

const Toolbar = (props) => {

    const name = props.user.name ? props.user.name : 'Instagc'
    const avatar = props.user.avatar ? `${URL}/img/${props.user.avatar}` : DEFAULT_USER
    console.log(props.user)
    return (
        <>
        <div className='toolbar'>
            <div className='logo'>
                <Link className='link' to='/'><h3>Instagc</h3></Link>
            </div>
            { props.user ? 
                <div className='profile'>
                    <Link className='link' to='/profile'><h3>{ name }</h3></Link>
                    <img src={ avatar } />
                </div>
                :
                <div className='profile'>
                    <Link className='link' to='/login'><h3 className='login'>Login</h3></Link>
                </div>
            }
        </div>
        { props.loader 
          ? <div className='loading'>
                Cargando ...
            </div>
          : '' 
        }
        </>
    )
}

const mapsStateToProps = (state) => {
    return {
        user: state.user,
        loader: state.helpInfo
    }
}
 
export default connect(mapsStateToProps)(Toolbar)
