import './DefaultNav.scss';

import { Link } from 'react-router-dom';

import LogoBank from '../../../assets/argentBankLogo.png';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../../redux/actions/auth.js';

const DefaultNav = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducers);

  const disconnect = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <nav className="main-nav">
      {/* Logo */}
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={LogoBank}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {/* User */}
      {user.isLogged ? (
        <div>
          <Link to="/profile">
            <span className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {user.firstName}
            </span>
          </Link>
          <Link className="main-nav-item" onClick={disconnect} to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default DefaultNav;
