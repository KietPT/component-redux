import { Component } from "react";


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>Hello Header</h1>
            </div>,
            
            <nav className="navbar navbar-inverse">
                <a className="navbar-brand" href="111">Bài 2 Component</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="2">Trang chủ</a>
                    </li>
                    <li>
                        <a href="3">Danh mục sản phẩm</a>
                    </li>
                </ul>
            </nav>
            
            
            
        );
    }
}

export default Header;
