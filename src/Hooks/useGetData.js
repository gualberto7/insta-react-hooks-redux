import {useState, useEffect} from 'react'
import { URL } from '../components/GLOBAL'
import axios from 'axios'

export const useGetData = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(false)
    const token = sessionStorage.getItem('token')
    useEffect(() => {
        setLoading(true)
        axios.get(`${URL}/posts`, {headers: {'Authorization': `Bearer ${token}`}})
            .then(res => {
                setPosts(res.data.data)
                setLoading(false)
            })
            .catch(e => console.log(e))
    }, [])

    return { posts, isLoading }
}

/*export const useSetLike = (id) => {
    const token = sessionStorage.getItem('token')
    useEffect(() => {
        axios.post(`${URL}/posts/like`, { post_id: id }, {headers: {'Authorization': `Bearer ${token}`}})
            .then(res => {
                useGetData()
            })
            .catch(e => console.log(e))
    }, [])
}*/
