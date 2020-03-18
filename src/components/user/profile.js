import React, { useState } from 'react'
import { connect } from 'react-redux'
import { URL } from '../GLOBAL'
import axios from 'axios'

import './styles.css'
import { updateUser, deleteUser } from '../../redux/actions/userAuth'

const Profile = (props) => {

    const [ avatar, setAvatar ] = useState('')

    const updateAvatar = (e) => {
        let data = new FormData()
        let file = e.target.files[0]
        data.append('avatar', file)
        let token = sessionStorage.getItem('token')
        console.log(file)
        console.log(data)
        axios.post(`${URL}/users/avatar`, data, 
            {headers: 
                {'Content-Type': 'multipart/form-data','Authorization': `Bearer ${token}`}
            })
            .then(res => {
                setAvatar(res.data)
            })
            .catch(e => console.log(e))
    }

    const updateUser = () => {
        let data = { avatar }
        let token = sessionStorage.getItem('token')
        axios.put(`${URL}/users/${props.user.id}`, data, {headers: {'Authorization': `Bearer ${token}`}})
            .then(res => {
                props.updateUser(res.data)
                setAvatar('')
            })
            .catch(e => console.log(e))
    }

    const deleteAvatar = () => {
        let data = { avatar }
        let token = sessionStorage.getItem('token')
        axios.post(`${URL}/users/avatar/delete`, data, {headers: {'Authorization': `Bearer ${token}`}})
            .then(res => {
                console.log(res)
                setAvatar('')
            })
            .catch(e => console.log(e))
    }

    const logout = () => {
        let token = sessionStorage.getItem('token')
        axios.get('http://blog.test/auth/logout', {headers: {'Authorization': `Bearer ${token}`}})
            .then(() => {
                props.removeUser()
                props.history.push('/login')
            })
    }

    return (
        <div className='p-profile'>
            <div className='p-avatar'>
                { avatar ? 
                    <img src={`${URL}/img/${avatar}`} />
                    :
                    <img src={`${URL}/img/${props.user.avatar}`} alt={props.user.name} />
                }
            </div>
            { avatar ?
                <>
                    <button onClick={updateUser}>Guardar</button>
                    <button onClick={deleteAvatar}>Cancelar</button>
                </>
                :
                <input type='file' onChange={ updateAvatar } />
            }
            <h3>{ props.user.name } { props.user.last_name } </h3>
            <h4> { props.user.email } </h4>
            <button onClick={logout}>Salir</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        removeUser: () => dispatch(deleteUser()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
