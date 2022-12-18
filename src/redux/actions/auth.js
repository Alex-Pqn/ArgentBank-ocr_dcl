import { authService } from '../../_services/auth.service';
import { STATUS } from '../config/status.js';

const login = (email, password, isRemembered) => {
  return (dispatch) => {
    authService
      .loginOne(
        { email, password },
        { 'Content-Type': 'application/json;charset=utf-8' }
      )
      .then((retrievedAuth) => {
        isRemembered
          ? localStorage.setItem('token', retrievedAuth.token)
          : sessionStorage.setItem('token', retrievedAuth.token);

        dispatch({
          type: STATUS.LOGIN_SUCCESS,
          payload: {
            user: { email, isRemembered },
          },
        });
      })
      .catch((error) =>
        dispatch({
          type: STATUS.LOGIN_ERROR,
          payload: {
            error,
          },
        })
      );
  };
};

const logout = () => {
  localStorage.clear();

  return (dispatch) =>
    dispatch({
      type: STATUS.LOGOUT_REQUEST,
    });
};

export const authActions = {
  login,
  logout,
};
