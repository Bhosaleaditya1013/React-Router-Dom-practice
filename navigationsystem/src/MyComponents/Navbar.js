import React from "react";
import { Link } from "react-router-dom";


function Navbar(props) {
  return (
    <div>
      <nav className="custom-navbar">
      <span className="navbar-title">{props.title}</span>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
