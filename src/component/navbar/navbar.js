import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './navbar.css';

const navbar = () => {
  return (
    <nav>
      <h1 className="logo">
        <Link to="/">Blog</Link>
      </h1>
      <ul>
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/about" activeClassName="selected">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
