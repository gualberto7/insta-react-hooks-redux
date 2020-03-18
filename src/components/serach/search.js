import React, { useState, useEffect, useRef } from 'react'
import { URL, DEFAULT_USER } from '../GLOBAL'
import './styles.css'
import { searchFriends } from '../../containers/posts.container'
import { PostsPlaceholder } from '../placeholder/postsPh'

const SearchFriends = () => {

    const [ friends, setFriends ] = useState([])
    const [ loading, setLoad ] = useState(true)
    const [ query, setQuery ] = useState('')
    const entrada = useRef()

    useEffect(() => {
        setTimeout(() => {
            if(query === entrada.current.value){
                searchFriends(query)
                    .then(res => {
                        setFriends(res.data)
                        setLoad(false)
                    })
                    .catch(e => console.log(e))
            }
        }, 1000)
    }, [ query ])

    return (
        <div className='s-search'>
            <h3>Encuntra a tus amigos...</h3>
            <input onChange={e => setQuery(e.target.value)} ref={entrada} placeholder='Busca por nombre' />
            { loading && <PostsPlaceholder /> }
            {  friends.map(friend => (
                <div key={friend.id} className='s-friends'>
                    <img src={ friend.avatar ? `${URL}/img/${friend.avatar}` : DEFAULT_USER } />
                    <span>{ friend.name } { friend.last_name }</span>
                </div>
            ))} 
        </div>
    )
}
 
export default SearchFriends;
