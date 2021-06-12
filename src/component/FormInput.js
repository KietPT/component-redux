import { Component } from "react";
import InputItem from './InputItem'

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword : ''
        }
    }
    onChangePass = (event) => {
        console.log("====== pass", event);
        this.setState({
            txtPassword: event.target.value
        })
    }

    onChangeUsername = (event) =>{
        console.log("====== user", event);
        this.setState({
            txtUsername: event.target.value
        })
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Panel title</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={this.onSubmitForm} className="form-inline" role="form">

                                <InputItem label="UserName" onChangeText={this.onChangeUsername} value={this.state.txtUsername} />
                                <InputItem label="Password" onChangeText={this.onChangePass} value={this.state.txtPassword} />

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
export default FormInput