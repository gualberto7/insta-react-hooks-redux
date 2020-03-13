import { SET_USER, UPDATE_USER, DELETE_USER } from '../actions/userAuth'

const userAuth = JSON.parse(sessionStorage.getItem('user'))

const initialState = userAuth ? userAuth : false

function user ( state = initialState, action ) {
    switch(action.type) {
        case SET_USER:
            sessionStorage.setItem('user', JSON.stringify(action.payload.user))
            sessionStorage.setItem('token', action.payload.token)
            return {
                ...action.payload.user
            }

        case UPDATE_USER:
            sessionStorage.setItem('user', JSON.stringify(action.payload.user))
            return {
                ...action.payload.user
            }

        case DELETE_USER:
            sessionStorage.clear()
            return {
                state: false
            }
            
        default:
            return state
    }
}

export default user
