import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="/products" className="navbar-brand">
                React CRUD & Routing
                </Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to="/products" className="nav-link">
                    Products
                </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;