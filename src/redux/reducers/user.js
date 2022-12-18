import { STATUS } from '../config/status.js';

export const initialState = {
  error: '',
  user: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    isRemembered: false,
    isLogged: false,
    createdAt: '',
    updatedAt: '',
  },
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case STATUS.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          isLogged: true,
          isRemembered: action.payload.user.isRemembered,
          email: action.payload.user.email,
        },
      };

    case STATUS.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };

    case STATUS.LOGOUT_REQUEST:
      return initialState;

    case STATUS.USER_REQUEST:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.user.id,
          firstName: action.payload.user.firstName,
          lastName: action.payload.user.lastName,
          createdAt: action.payload.user.createdAt,
          updatedAt: action.payload.user.updatedAt,
        },
      };

    default:
      return state;
  }
};

export default userReducers;
