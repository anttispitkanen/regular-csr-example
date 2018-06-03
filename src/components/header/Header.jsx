import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => (
  <header className="main-header">
    <div className="heading-container">
      <Link to="/">
        <i className="fa fa-home" />
      </Link>
      <h1 className="main-heading">
        <Link to="/">
          BAD EXAMPLE :DD
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
