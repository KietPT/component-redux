import { Component } from "react";

class InputItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
        }
    }
    
    render() {
        return (

            <div className="form-group">
                <label>{this.props.label}</label>
                <input type="text"
                    name="txtUsername"
                    className="form-control" id=""
                    placeholder="Input field"
                    value={this.props.value}
                    onChange={this.props.onChangeText}
                />
            </div>


        );
    }
}
export default InputItem