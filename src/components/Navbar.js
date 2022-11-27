import React from 'react';

import { Link } from 'react-router-dom';
import avatar from '../img/avatar.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="heading">Bookstore CMS</div>
      <div className="links">
        <Link className="nav-link-1" to="/">BOOKS</Link>
        <Link className="nav-link-2" to="/category">CATEGORIES</Link>
      </div>
      <img className="avatar" src={avatar} alt="avatar" />

    </div>
  );
}

export default Navbar;
