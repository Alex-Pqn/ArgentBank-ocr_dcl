import './FormUserLogin.scss';

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../../redux/actions/auth.js';

const FormUserLogin = () => {
  const dispatch = useDispatch();

  const { user, error } = useSelector((state) => state.userReducers);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemembered, setIsRemembered] = useState(false);

  const updateEmailState = (event) => setEmail(event.target.value);
  const updatePasswordState = (event) => setPassword(event.target.value);
  const updateIsRememberedState = (event) =>
    event.target.value === 'on'
      ? setIsRemembered(true)
      : setIsRemembered(false);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(authActions.login(email, password, isRemembered));
  };

  if (user.isLogged) return <Navigate to="/profile" />;

  return (
    <form className="user-login-form" onSubmit={onSubmit}>
      {/* Username */}
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={updateEmailState}
          autoComplete="username"
        />
      </div>
      {/* Password */}
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={updatePasswordState}
          autoComplete="current-password"
        />
      </div>
      {/* Remember-me */}
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          onChange={updateIsRememberedState}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {/* Error */}
      <div className="error">
        <span>{error}</span>
      </div>
      {/* Button */}
      <button>Sign In</button>
    </form>
  );
};

export default FormUserLogin;
