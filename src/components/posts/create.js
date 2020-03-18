import React, { useState } from 'react'
import axios from 'axios'
import { URL } from '../GLOBAL'

const PostCreate = (props) => {

    const [ text, setText ] = useState('')
    const [ photo, setPhoto ] = useState('')

    const storePost = () => {
        let data = { description: text, photo }
        let token = sessionStorage.getItem('token')
        axios.post(`${URL}/posts`, data, {headers: {'Authorization': `Bearer ${token}`}})
        .then(() => {
            props.history.push('/')
        })
        .catch(e => console.log(e))
    }

    const storePhoto = async(e) => {
        let data = new FormData()
        let file = e.target.files[0]
        data.append('photo', file)
        let token = sessionStorage.getItem('token')
        await axios.post(`${URL}/posts/photo`, data, 
            {headers: 
                {'Content-Type': 'multipart/form-data','Authorization': `Bearer ${token}`}
            })
            .then(res => {
                setPhoto(res.data)
            })
            .catch(e => console.log(e))
    }

    return (
        <div className='form-post'>
            <textarea placeholder='Escribe algo...' onChange={e => setText(e.target.value)} />
            { photo ?
              <>
                <img src={`${URL}/img/${photo}`} />
                <div className='actions-b'>
                    <button onClick={storePost}>Publicar</button>
                    <button>Cancelar</button>
                </div>
              </>
              : <input type='file' onChange={storePhoto}/>
            }
        </div>
    )
}
 
export default PostCreate
