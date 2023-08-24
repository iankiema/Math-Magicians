import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="navigation">
    <ul className="nav-links">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/calculator" className="nav-link">
          Calculator
        </Link>
      </li>
      <li>
        <Link to="/quote" className="nav-link">
          Random Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
