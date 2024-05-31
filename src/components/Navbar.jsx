import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
    <nav className="navbar navbar-primary">
      <Link className="navbar-brand" to="/">TECHCONNECT</Link>
        <span className="navbar-toggler-icon"></span>
        
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
