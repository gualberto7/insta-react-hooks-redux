export const SET_USER = 'SET_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'

export const setUser = (user, token) => {
    return {
        type: SET_USER,
        payload: { user, token }
    }
}

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: { user }
    }
}

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}
 