import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>
      <Link to="/">Expensify</Link>
    </h1>
    <p>
      <NavLink to="/create" activeClassName="is-active">
        New Expense
      </NavLink>
    </p>
    <p>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </p>
  </header>
);

export default Header;
