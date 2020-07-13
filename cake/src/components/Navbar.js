import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./cakeLogo.png";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expannd-sm bg-dark">
                <Link to="/">
                    <img
                        src={logo}
                        alt="cake"
                        className="navbar-brand"
                        style={{ width: "50px" }}
                    />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
