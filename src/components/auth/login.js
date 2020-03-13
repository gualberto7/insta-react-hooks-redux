import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './styles.css'

import { setUser } from '../../redux/actions/userAuth'
import { activate, unActivate } from '../../redux/actions/helpInfo.action'

const Login = (props) => {

    const [ email, setEmail ] = useState('albert@gmail.com')
    const [ password, setPassword ] = useState('albert123')

    const login = async () => {
        props.load()
        let data = { email, password }
        await axios.post('http://blog.test/auth/login', data)
            .then(res => {
                props.unload()
                props.setUser(res.data.user, res.data.token)
                props.history.push('/')
            })
            .catch(e => console.log(e))
    }

    return (
        <div className='card-auth'>
            <div className='title'>
                <h2>Autenticación</h2>
            </div>
            <hr />
            <input type='text' onChange={e => setEmail(e.target.value)} value={email} placeholder='Correo electrónico'/>
            <input type='password' onChange={e => setPassword(e.target.value)} value={password} placeholder='Contraseña' />
            <button className='button' onClick={login}>Entrar</button>
            <hr />
            <div className='text-info'>
                <h4>Aun no tienes una cuenta? crea uno 
                    <Link to='/register'> aquí</Link>
                </h4>
                <p>O inicia sesión con:</p>
            </div>
           <div className='button-actions'>
                <button>Entrar con Facebook</button>
                <button>Entrar con Google</button>
           </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user, token) => dispatch(setUser(user, token)),
        load: () => dispatch(activate()),
        unload: () => dispatch(unActivate())
    }
}
 
export default connect(null, mapDispatchToProps)(Login)
