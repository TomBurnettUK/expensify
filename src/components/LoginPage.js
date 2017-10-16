import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

import './LoginPage.css';

export const LoginPage = props => (
  <div className="login-page">
    <div className="login-box">
      <h1 className="login-title">Expensify</h1>
      <p className="login-description">
        It&apos;s time to get your expenses under control!
      </p>
      <button className="login-button" onClick={props.startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
