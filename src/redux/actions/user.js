import { userService } from '../../_services/user.service';
import { handleResponse } from '../../_helpers/handle-response';
import { STATUS } from '../config/status.js';

const retrieveUserProfile = () => {
  return (dispatch) => {
    userService
      .retrieveOneProfile({
        Authorization:
          `Bearer` +
          (sessionStorage.getItem('token') || localStorage.getItem('token')),
      })
      .then(handleResponse)
      .then((user) =>
        dispatch({
          type: STATUS.USER_REQUEST,
          payload: {
            user: {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              createdAt: user.createdAt,
              updatedAt: user.updatedAt,
            },
          },
        })
      )
      .catch((error) => {
        throw error;
      });
  };
};

const updateUserProfile = (firstName, lastName) => {
  return (dispatch) => {
    userService
      .updateOneProfile(
        { firstName, lastName },
        {
          Authorization:
            `Bearer` +
            (sessionStorage.getItem('token') || localStorage.getItem('token')),
        }
      )
      .then(handleResponse)
      .then((user) =>
        dispatch({
          type: STATUS.USER_REQUEST,
          payload: {
            user: {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              createdAt: user.createdAt,
              updatedAt: user.updatedAt,
            },
          },
        })
      )
      .catch((error) => {
        throw error;
      });
  };
};

export const userActions = {
  retrieveUserProfile,
  updateUserProfile,
};
