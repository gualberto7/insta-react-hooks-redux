import { createStore, combineReducers } from "redux";
import user from './reducers/userAuth.reducer'
import helpInfo from './reducers/helpInfo.reducer'

const mainReducer = combineReducers({
    user,
    helpInfo
})

const store = createStore(mainReducer)

export default store
