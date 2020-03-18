import { URL } from '../components/GLOBAL'
import axios from 'axios'

const token = sessionStorage.getItem('token')

export const getPosts = () => {
    return axios.get(`${URL}/posts`, {headers: {'Authorization': `Bearer ${token}`}})
}

export const getPost = (id) => {
    return axios.get(`${URL}/posts/${id}`, {headers: {'Authorization': `Bearer ${token}`}})
}

export const setLike = (id) => {
    return axios.post(`${URL}/posts/like`, { post_id: id }, {headers: {'Authorization': `Bearer ${token}`}})
}

export const setComment = (data) => {
    return axios.post(`${URL}/comments`, data, {headers: {'Authorization': `Bearer ${token}`}})
}

export const listFriends = () => {
    return axios.get(`${URL}/users`, {headers: {'Authorization': `Bearer ${token}`}})
}

export const searchFriends = (query) => {
    if(query) return axios.get(`${URL}/search/${query}`)
    else return axios.get(`${URL}/search`)
}
