import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="heading"><Link to="/">Bookstore</Link></div>
      <div className="nav-link"><Link to="/">Home</Link></div>
      <div className="nav-link-1"><Link to="/Categories">Categories</Link></div>
      <div className="nav-link-1"><Link to="/Add">Add</Link></div>

    </div>
  );
}

export default Navbar;
