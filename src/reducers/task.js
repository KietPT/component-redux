import * as types from '../constant/actionType'

let initState = {
    id : '',
    name : '',
    status: 'false'
};

let myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_TASK:
            state = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status            
            }
            return state
        case types.RESET_DATA:
            return state    
        default:
            return state
    }

}
export default myReducer