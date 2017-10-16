import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

import './Header.css';

export const Header = props => (
  <header>
    <div className="content-container">
      <div className="header-content">
        <Link to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button onClick={props.startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
