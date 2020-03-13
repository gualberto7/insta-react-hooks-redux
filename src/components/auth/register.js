import React, { useState } from 'react'
import './styles.css'
import { connect } from 'react-redux'
import { setUser } from '../../redux/actions/userAuth'
import { activate, unActivate } from '../../redux/actions/helpInfo.action'
import axios from 'axios'

const Register = (props) => {

    const [ name, setName ] = useState('')
    const [ last_name, setLastName ] = useState('')
    const  [ email, setEmail ] = useState('')
    const  [ password, setPassword ] = useState('')
    const  [ passwordConfirm, setPasswordConfirm ] = useState('')

    const sendUser = async () => {
        let user = {name, last_name, email, password}
        props.load()
        await axios.post('http://blog.test/auth/register', user)
            .then(res => {
                props.unload()
                console.log(res)
                props.setUser(res.data.user, res.data.token)
            })
            .catch(e => {console.log(e)})
    }

    return (
        <div className='card-auth'>
            <div className='title'>
            <h2>Registro de cuenta</h2>
            </div>
            <hr />
            <input type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder='Nombres'/>
            <input type='text' onChange={(e) => setLastName(e.target.value)} value={last_name} placeholder='Apellidos'/>
            <input type='text' onChange={e => setEmail(e.target.value)} value={email} placeholder='Correo electrónico'/>
            <input type='password' onChange={e => setPassword(e.target.value)} value={password} placeholder='Contraseña' />
            <input type='password' onChange={e => setPasswordConfirm(e.target.value)} value={passwordConfirm} placeholder='Confirma contraseña' />
            <p>Sube una foto de perfíl</p>
            <input type='file'/>
            <button className='button' onClick={sendUser}>Registrarse</button>
        </div>
    )
}

/*const mapStateToProps = (state) => {
    return {
        user: state
    }
}*/

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user, token) => dispatch(setUser(user, token)),
        load: () => dispatch(activate()),
        unload: () => dispatch(unActivate())
    }
}
 
export default connect(null, mapDispatchToProps)(Register)
