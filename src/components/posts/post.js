import React, { useState, useEffect } from 'react'
import { getPost, setComment } from '../../containers/posts.container'
import { PostsPlaceholder } from '../placeholder/postsPh'
import { URL, DEFAULT_USER } from '../GLOBAL'

const Post = ({ match }) => {

    const [ comments, setComments ] = useState([])
    const [ text, setText ] = useState('')
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fechPosts()
    }, [])

    const fechPosts = () => {
        getPost(match.params.id)
            .then(res => {
                setComments(res.data.data)
                setLoading(false)
            })
            .catch(e => console.log(e))
    }

    const sendComment = () => {
        let data = { comment: text, post_id: match.params.id }
        setComment(data)
            .then(() => fechPosts())
            .catch(e => console.log(e))
    }

    if(isLoading){
        return (
            <PostsPlaceholder />
        )
    }

    return (    
        <div className='comments'>
            <div className='form-comment'>
                <input type='text' onChange={e => setText(e.target.value)} placeholder='Escribe aqui tu comentario' />
                <i onClick={sendComment} className='material-icons'>send</i>
            </div>
            { comments.map(comment => (
                <div key={comment.id} className='comment'>
                    <div className='c-avatar'>
                        <img src={ comment.userAvatar ? `${URL}/img/${comment.userAvatar}`: DEFAULT_USER } />
                    </div>
                    <div className='data'>
                        <h4>{ comment.user }</h4>
                        <span className='time'> .{ comment.created_at }</span><br/>
                        <span className='pco'>{ comment.comment }</span>
                    </div>
                </div>
            ))
            }
            
        </div>
    )
}
 
export default Post
