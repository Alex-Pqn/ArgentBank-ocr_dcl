import { userService } from '../../_services/user.service';
import { STATUS } from '../config/status.js';

const retrieveUserProfile = () => {
  return (dispatch) => {
    userService
      .retrieveOneProfile({
        Authorization:
          `Bearer` +
          (sessionStorage.getItem('token') || localStorage.getItem('token')),
      })
      .then((retrievedUser) =>
        dispatch({
          type: STATUS.USER_REQUEST,
          payload: {
            user: {
              id: retrievedUser.id,
              firstName: retrievedUser.firstName,
              lastName: retrievedUser.lastName,
              createdAt: retrievedUser.createdAt,
              updatedAt: retrievedUser.updatedAt,
            },
          },
        })
      )
      .catch((error) => console.log(error));
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
      .then((updatedUser) =>
        dispatch({
          type: STATUS.USER_REQUEST,
          payload: {
            user: {
              id: updatedUser.id,
              firstName: updatedUser.firstName,
              lastName: updatedUser.lastName,
              createdAt: updatedUser.createdAt,
              updatedAt: updatedUser.updatedAt,
            },
          },
        })
      )
      .catch((error) => console.log(error));
  };
};

export const userActions = {
  retrieveUserProfile,
  updateUserProfile,
};
