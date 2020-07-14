import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./cakeLogo.png";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expannd-sm">
                <Link to="/">
                    <img
                        src={logo}
                        alt="cake"
                        className="navbar-brand"
                        style={{ width: "55px" }}
                    />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-light">
                            <h1 style={{ color: "black" }}>Product</h1>
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button type="button" className="btn btn-success">
                        <span className="mr-2">
                            <i className="fas fa-shopping-cart"></i>
                        </span>
                        My Cart
                    </button>
                </Link>
            </nav>
        );
    }
}
