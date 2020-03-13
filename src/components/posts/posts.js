import React, { useState, useEffect } from 'react'
import './styles.css'

const defaultUser = 'https://www.sketchengine.eu/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'

const Posts = () => {

    //const [ user, setUser ] = useState({})

    /*useEffect(() => {
        fetch('http://blog.test/prueba')
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(e => console.log(e))
    })*/

    return (
        [1].map(post => (
            <div key={post} className='card'>
                <div className='user'>
                    <div className='avatar'>
                        <img src={ defaultUser } />
                    </div>
                    <div className='user-data'>
                        <span className='name'>Vania Eunice Calvimontes</span><br />
                        <span className='time'>hace 4 minutos</span>
                    </div>
                </div>
                <div className='description'>
                    <p>Santa virgen de la Papaya</p>
                </div>
                <div className='photo'>
                    <img src="#" />
                </div>
                <div className='actions'>
                    <div className='likes'>
                        <i className='material-icons'>favorite</i>
                        <span>10</span>
                    </div>
                    <div className='comments'>
                        <i className='material-icons'>chat</i>
                        <span>10</span>
                    </div>
                </div>
            </div>
        ))
    )
}
 
export default Posts
