import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/products" className="navbar-brand">
                    React CRUD & Routing
                </Link>
            </nav>
    );

export default Header;