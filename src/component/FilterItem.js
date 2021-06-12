import { Component } from "react";


class FilterItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: true,
            inactive: false
        }
    }


    onFilter = (e) => {
        e.preventDefault()
        this.props.onFilter(this.state)
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
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" >
                            <li name="txtAsc" value={this.txtAsc}>
                                    <span className="fa fa-sort-alpha-asc pr-5">
                                        Tên A-Z
                                    </span>
                            </li>
                            <li name="txtDesc" value={this.txtDesc}>
                                    <span className="fa fa-sort-alpha-desc pr-5">
                                        Tên Z-A
                                    </span>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li name="active" value={true} onClick={this.onFilter}>Trạng Thái Kích Hoạt</li>
                            <li name="inactive" value={false} onClick={this.onFilter}>Trạng Thái Ẩn</li>
                        </ul>
                    </div>
                </div>
        );
    }
}
export default FilterItem