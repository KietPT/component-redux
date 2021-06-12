import * as types from '../constant/actionType'

let initState = {
    txtFilter : '',
    filterStatus: '-1'
};

let myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.FILTER_DATA:
            console.log(action)
            return action
        default:
            return state
    }

}
export default myReducer