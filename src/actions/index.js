import * as types from '../constant/actionType'

export const listAll = () => {
    return {
        type: types.LIST_ALL,
    }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
}

export const deleteTask = (id) => {
    return {
        type: types.REMOVE_TASK,
        id
    }
}

export const getTask = (task) => {
    return {
        type: types.GET_TASK,
        task
    }
}

export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task
    }
}

export const showForm = () => {
    return {
        type: types.SHOW_FORM
    }
}

export const resetData = () => {
    return {
        type: types.RESET_DATA
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const clearData = () => {
    return {
        type: types.CLEAR_DATA
    }
}
export const searchItem = (item) => {
    return {
        type: types.SEARCH_DATA,
        item
    }
}
export const filterData = (txtFilter, filterStatus) => {
    return {
        type: types.FILTER_DATA,
        txtFilter, 
        filterStatus
    }
}

