import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm'
import SearchSortItem from './component/SearchSortItem'
import TaskTable from './component/TaskTable'
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux'
import * as action from './actions/index'

class App extends Component {

  constructor(props) {
    super(props);
  }

  onShowForm = () => {
    this.props.onShowForm()
    this.props.onResetData()
  }

  render() {
    var { isDisplayForm } = this.props
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
              <TaskForm />
          </div>
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>

            <button type="button" className="btn btn-primary" onClick={this.onShowForm}>
              Thêm Công Việc
              </button>
            <SearchSortItem />
            <TaskTable />
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    isDisplayForm : state.isDisplayForm,
  }
}

const mapDispatch = (dispatch) => {
  return {
    onShowForm : () =>{
      dispatch(action.showForm())
    },
    onResetData : () => {
      dispatch(action.resetData())
    }
  }
}

export default connect(mapState,mapDispatch)(App);
