import { Component } from "react";


class ProductTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Iphone 6 plus',
                    price: 16000000,
                    status: true
                },
                {
                    id: 2,
                    name: 'Iphone 7 plus',
                    price: 17000000,
                    status: false
                },
                {
                    id: 3,
                    name: 'Iphone 8 plus',
                    price: 18000000,
                    status: true
                },
                {
                    id: 4,
                    name: 'Iphone 9 plus',
                    price: 19000000,
                    status: true
                }
            ],
            isActive: true
        }
    }

    onSetState = () => {
        console.log(this.state.isActive);
        this.setState({ isActive: !this.state.isActive })
    }

    render() {
        let elements = ''
        if (this.state.isActive) {
            elements = this.state.products.sort((a, b) => a.id - b.id).map((product, index) => {
                let result = ''
                if (product.status) {
                    result = <ProductTableItem name={product.name} id={product.id} price={product.price} />
                }
                return result;
            })
        } else {
            elements = this.state.products.sort((a, b) => b.id - a.id).map((product, index) => {
                let result = ''
                if (product.status) {
                    result = <ProductTableItem name={product.name} id={product.id} price={product.price} />
                }
                return result;
            })
        }
        return (
            <div className="col-xs-12  col-sm-12  col-md-12  col-lg-12 ">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary" onClick={this.onSetState}>Sort: {this.state.isActive === true ? 'Giảm' : 'Tăng'}</button>
            </div>
        );
    }
}

export default ProductTable;
