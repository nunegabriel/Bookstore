import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="heading"><Link to="/">Bookstore</Link></div>
      <div className="">
        <Link className="nav-link" to="/">Book List</Link>
        <Link className="nav-link" to="/category">Category</Link>
      </div>
    </div>
  );
}

export default Navbar;
