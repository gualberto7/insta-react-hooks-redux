import { ACTIVATE, UNACTIVATE } from "../actions/helpInfo.action"

function helpInfo (state = false, action){
    switch(action.type){

        case ACTIVATE:
            return {
                state: true
            }

        case UNACTIVATE:
            return {
                state: false
            }

        default:
            return state
    }
}

export default helpInfo
