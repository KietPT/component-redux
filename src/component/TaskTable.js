import { Component } from "react";

import TaskItem from './TaskItem'
import { connect } from 'react-redux'
import * as action from '../actions/index'

class TaskTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            txtFilter: '',
            filterStatus: '-1'
        }
    }

    // editItem = (id) =>{
    //     this.props.onEditItem(id)
    // }

    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.value
        this.props.onFilterData(name === 'txtFilter' ? value : this.state.txtFilter,
            name === 'filterStatus' ? value : this.state.filterStatus)
        this.setState({
            [name]: value
        })
    }



    render() {
        var { tasks, filterTable } = this.props;
        console.log(filterTable)
        if (filterTable.txtFilter) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterTable.txtFilter) !== -1
            })
        }
        tasks = tasks.filter((task) => {
            if (filterTable.filterStatus === '-1') {
                return task
            }
            return task.status === (filterTable.filterStatus === '1' ? "true" : "false")
        })
        var elementTask = tasks.map((task, index) => {
            return <TaskItem key={index} task={task} index={index} />
        })
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" name="txtFilter" value={this.txtFilter} className="form-control" onChange={this.onChange} />
                                </td>
                                <td>
                                    <select className="form-control" onChange={this.onChange} name="filterStatus">
                                        <option value='-1'>Tất Cả</option>
                                        <option value='0'>Ẩn</option>
                                        <option value='1'>Kích Hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {elementTask}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filterTable: state.filterTable
    }
}

const mapDispatch = (dispatch) => {
    return {
        onFilterData: (txtFilter, filterStatus) => {
            dispatch(action.filterData(txtFilter, filterStatus))
        }
    }
}

export default connect(mapStateToProps, mapDispatch)(TaskTable)