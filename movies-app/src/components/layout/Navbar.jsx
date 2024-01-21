import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link"></Link>
          </li>
          <li className="nav-item">
            <Link to="/movies_list" className="nav-link">local Movies</Link>
          </li>
          <li className="nav-item">
            <Link to="/online_movies" className="nav-link">Online Movies</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
