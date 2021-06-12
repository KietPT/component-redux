import { Component } from "react";
import {connect} from 'react-redux'
import * as action from '../actions/index'


class TaskItem extends Component {

    removeItem = () =>{
        this.props.onDeleteTask(this.props.task.id);
    }

    editItem = () =>{
        this.props.onGetTask(this.props.task)
        this.props.onOpenForm()
    }

    render() {
        var { task , index} = this.props
        return (
            <tr>
                <td>{index+1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === 'true' ? "label label-success": "label label-danger"}>
                        {task.status === 'true' ? 'Kích hoat' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.editItem}>Sửa</button>
                    <button type="button" className="btn btn-danger" onClick={this.removeItem}>Xoá</button>
                </td>
            </tr>


        );
    }
}

const mapState = state => {
    return {

    }
}

const mapDispatch = (dispatch, props) =>{
    return {
        onDeleteTask : (id) =>{
            dispatch(action.deleteTask(id))
        },
        onGetTask : (task) => {
            dispatch(action.getTask(task))
        },
        onOpenForm : () =>{
            dispatch(action.openForm())
        }
    }
}

export default connect(mapState, mapDispatch)(TaskItem)