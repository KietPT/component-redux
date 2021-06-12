
import {combineReducers} from 'redux'
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
import task from './task'
import filterTable from './filterTable'

const myReducer = combineReducers({
    tasks, 
    isDisplayForm,
    task,
    filterTable
})
export default myReducer