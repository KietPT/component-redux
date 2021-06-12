import { Component } from "react";
import { connect } from 'react-redux'
import * as action from '../actions/index'


class SearchItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            txtSearch: '',
        }
    }

    onSearch = (e) => {
        e.preventDefault()
        this.props.onSearch(this.state.txtSearch)
    }


    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input type="text" name="txtSearch" value={this.txtSearch} className="form-control" placeholder="Nhập từ khóa..." onChange={this.onChange} />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button"
                            onClick={this.onSearch}>Tìm</button>
                    </span>
                </div>
            </div>

        );
    }
}
const mapState = state =>{
    return {

    }
}

const mapDispatch = dispatch => {
    return {
        onSearch : (item) => {
            dispatch(action.searchItem(item))
        }
    }
}
export default connect(mapState, mapDispatch)(SearchItem)