import * as types from '../constant/actionType'

let initState = false;

let myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SHOW_FORM:
            return !state
        case types.CLOSE_FORM:
            return false
        case types.OPEN_FORM:
            return true
        default:
            return state
    }

}
export default myReducer