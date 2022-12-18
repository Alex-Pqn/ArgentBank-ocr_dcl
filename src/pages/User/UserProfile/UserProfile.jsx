import './UserProfile.scss';

import UserAccountItem from '../../../components/User/UserAccountItem/UserAccountItem';

import { accountsMock } from '../../../assets/accountsMock.js';

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router';
import { userActions } from '../../../redux/actions/user.js';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducers);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const updateFirstName = (event) => setFirstName(event.target.value);
  const updateLastName = (event) => setLastName(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(userActions.updateUserProfile(firstName, lastName));
    setIsFormDisplayed(false);
  };

  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
  const showForm = () => setIsFormDisplayed(true);
  const hideForm = () => setIsFormDisplayed(false);

  useEffect(() => {
    dispatch(userActions.retrieveUserProfile(user.token));
  }, [dispatch, user.token]);

  if (!user.isLogged) return <Navigate to="/" />;

  return (
    <div className="user-profile bg-dark">
      {/* Header */}
      <header className="user-profile__header">
        <h1>
          Welcome back{' '}
          {!isFormDisplayed && (
            <span>
              <br />
              {user.firstName} {user.lastName}
            </span>
          )}
        </h1>

        {/* Form */}
        {isFormDisplayed && (
          <form onSubmit={onSubmit}>
            <div className="input">
              <input
                required
                className="input-edit"
                type="text"
                id="firstName"
                placeholder={user.firstName}
                value={firstName}
                onChange={updateFirstName}
              />
              <input
                required
                className="input-edit"
                type="text"
                id="lastName"
                placeholder={user.lastName}
                value={lastName}
                onChange={updateLastName}
              />
            </div>
            <div className="buttons">
              <button className="edit-button form-button" type="submit">
                Save
              </button>
              <button
                className="edit-button form-button"
                type="button"
                onClick={hideForm}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {!isFormDisplayed && (
          <button className="edit-button" onClick={showForm}>
            Edit Name
          </button>
        )}
      </header>

      {/* Account */}
      <section className="user-profile__accounts">
        <h2 className="sr-only">Accounts</h2>

        <div className="accounts">
          {accountsMock.map((account, index) => (
            <div key={index} className="accounts__item">
              <UserAccountItem title={account.title} amount={account.amount} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
