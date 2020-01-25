import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/products"> Products
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/add-product"> Add Product 
          </Link>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
</nav>
);

export default Header;