import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = props => (
  <header>
    <h1>
      <Link to="/dashboard">Expensify</Link>
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
    <button onClick={props.startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
