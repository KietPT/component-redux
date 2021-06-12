import { Component } from "react";


class ProductTableItem extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            
            <tr key={this.props.id}><td>{this.props.id}</td><td>{this.props.name}</td><td>{this.props.price}</td></tr>
            
        );
    }
}

export default ProductTableItem;
