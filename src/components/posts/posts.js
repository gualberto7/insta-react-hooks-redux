import React, { useEffect, useState } from 'react'
import './styles.css'
import { URL } from '../GLOBAL'
import { getPosts, setLike } from '../../containers/posts.container'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetchPost()
    }, [])

    const fetchPost = () => {
        getPosts()
            .then(res => {
                setPosts(res.data.data)
                setLoading(false)
            })
            .catch(e=> console.log(e))
    }

    const liked = (id) => {
        setLike(id)
        .then(() => {
            fetchPost()
        })
        .catch(e=> console.log(e))
    }

    return (
        <>
            { isLoading ?
                <p>Cargando...</p>
             :
              posts.map(post => (                   
                <div key={post.id} className='card'>
                    <div className='user'>
                        <div className='avatar'>
                            <img src={`${URL}/img/${post.userAvatar}`} />
                        </div>
                        <div className='user-data'>
                            <span className='name'>{ post.user }</span><br />
                            <span className='time'>{ post.created_at }</span>
                        </div>
                    </div>
                    <div className='description'>
                        <p>{ post.post }</p>
                    </div>
                    <div className='photo'>
                        <img src={`${URL}/img/${post.photo}`} />
                    </div>
                    <div className='actions'>
                        <div className='likes'>
                        <i className='material-icons' onClick={liked.bind(this, post.id)}>{ post.like ? 'favorite' : 'favorite_border' }</i>
                            <span>{ post.likes }</span>
                        </div>
                        <div className='comments'>
                            <i className='material-icons'>chat</i>
                            <span>{ post.comments }</span>
                        </div>
                    </div>
                </div>
              ))
            }
        </>
    )
}
 
export default Posts
