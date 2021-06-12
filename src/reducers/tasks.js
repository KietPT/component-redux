import * as types from '../constant/actionType'
import { v4 as uuidv4 } from 'uuid';


let dataStorage = JSON.parse(localStorage.getItem('tasks'))
let initState = dataStorage ? dataStorage : []

const findIndex = (id, state) => {
    var index = state.findIndex(function (o) {
        return o.id === id;
    })
    return index
}

const removeItem = (id, state) => {
    var index = findIndex(id, state)
    if (index !== -1) state.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(state))
}

const addTask = (action, state) => {
    let taskCreate = {
        id: uuidv4(),
        name: action.task.txtTask,
        status: action.task.status
    }
    state.push(taskCreate)
    localStorage.setItem('tasks', JSON.stringify(state))
}

const editItem = (action, state) => {
    var index = findIndex(action.task.id, state);
    let taskEdit = {
        id: action.task.id,
        name: action.task.txtTask,
        status: action.task.status
    }
    state[index] = taskEdit
    localStorage.setItem('tasks', JSON.stringify(state))
}

const searchData = (item, state) => {
    state = state.filter((task) => {
        return task.name.toLowerCase().indexOf(item) !== -1
    })
    return state
}

let myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state
        case types.ADD_TASK:
            addTask(action, state)
            return [...state]
        case types.REMOVE_TASK:
            removeItem(action.id, state)
            return [...state]
        case types.EDIT_TASK:
            console.log(action)
            editItem(action, state)
            return [...state]
        case types.SEARCH_DATA:
            console.log('action item', action.item)
            if(action.item !== undefined && action.item !== ''){
                return searchData(action.item, state);
            }
            return initState
        // case types.FILTER_DATA:
        //     state = filterData(action.txtFilter, action.filterStatus, state)
        //     return state
        default:
            return state
    }

}
export default myReducer