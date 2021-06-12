import { Component } from "react";
import { connect } from 'react-redux'
import * as action from '../actions/index'

class TaskForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            txtTask: '',
            status: 'false'
        }
    }

    // componentWillMount(){
    //     if (this.props.task) {
    //         this.setState({
    //             id: this.props.task.id,
    //             txtTask: this.props.task.name,
    //             status: this.props.task.status
    //         })
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                txtTask: nextProps.task.name,
                status: nextProps.task.status
            })
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm()
    }

    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.value
        this.setState({
            [name]: value
        })
    }
    onSumbit = (e) => {
        e.preventDefault()
        let task = this.state
        if (task && task.id !== '') {
            this.props.onEditItem(task)
        } else {
            this.props.onAddTask(task)
        }
        this.props.onCloseForm()
    }

    render() {
        let { task } = this.props
        console.log('tasble form ', task)
        if (!this.props.isDisplayForm) {
            return ''
        }
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{task.id !== '' ? 'Chỉnh sửa' : 'Thêm công việc'}<button className="btn btn-info" onClick={this.onCloseForm}>X</button></h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSumbit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control" name='txtTask' value={this.state.txtTask} onChange={this.onChange} />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required" name='status' value={this.state.status} onChange={this.onChange}>
                            <option value="true" selected>Kích Hoạt</option>
                            <option value="false">Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            {task.id === '' ? <button type="submit" className="btn btn-success" >Thêm</button> :
                                <button type="submit" className="btn btn-success" >Chỉnh sửa</button>}
                            <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        task: state.task
    }
}
const mapDispath = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(action.addTask(task))
        },
        onCloseForm: () => {
            dispatch(action.closeForm())
        },
        onEditItem: (task) => {
            dispatch(action.editTask(task))
        },
        onClearData: () =>{
            dispatch(action.clearData())
        }
    }
}
export default connect(mapStateToProps, mapDispath)(TaskForm)

