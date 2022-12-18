import { userService } from '../../_services/user.service';
import { STATUS } from '../config/status.js';

const retrieveUser = () => {
  return (dispatch, getState) => {
    const { user } = getState('userReducers').userReducers;

    userService
      .retrieveOneProfile(null, {
        Authorization: `Bearer` + user.token,
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

const updateUser = (firstName, lastName) => {
  return (dispatch, getState) => {
    const { user } = getState('userReducers').userReducers;

    userService
      .updateOneProfile(
        { firstName, lastName },
        {
          Authorization: `Bearer` + user.token,
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
  retrieveUser,
  updateUser,
};
