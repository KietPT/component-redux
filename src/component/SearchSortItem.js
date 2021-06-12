import { Component } from "react";

import SearchItem from './SearchItem'


class SearchSortItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            txtSearch: '',
        }
    }

    onSearch = (data) => {
        this.props.onSearch(data)
    }


    render() {
        return (
            <div className="row mt-15">
                <SearchItem onSearch = {this.onSearch}/>
                {/* <FilterItem/> */}
            </div>

        );
    }
}
export default SearchSortItem