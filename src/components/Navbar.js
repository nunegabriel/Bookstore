import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="heading">Bookstore</div>
      <div className="links">
        <Link className="nav-link-1" to="/">BOOKS</Link>
        <Link className="nav-link-2" to="/category">CATEGORIES</Link>
      </div>
    </div>
  );
}

export default Navbar;
