import { requestOptions } from '../_helpers/request-options';
import { userRoutes } from '../config/api/routes/user.routes.config';

export const userService = {
  signupOne,
  loginOne,
  createOneProfile,
  updateOneProfile,
};

/**
 * POST: User Signup
 * Signup user
 * @returns User token
 */
async function signupOne() {
  return fetch(userRoutes.postUserSignup(), requestOptions.post())
    .then((res) => {
      if (!res.ok) return Promise.reject('Unable to signup one user.');
      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      throw err;
    });
}

/**
 * POST: User Login
 * Login user
 * @returns User token
 */
async function loginOne() {
  return fetch(userRoutes.postUserSignup(), requestOptions.post())
    .then((res) => {
      if (!res.ok) return Promise.reject('Unable to login one user.');
      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      throw err;
    });
}

/**
 * POST: User Profile
 * Retrieves user profile
 * @returns User Profile
 */
async function createOneProfile() {
  return fetch(userRoutes.postUserSignup(), requestOptions.post())
    .then((res) => {
      if (!res.ok) return Promise.reject('Unable to create one user profile.');
      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      throw err;
    });
}

/**
 * PUT: User Profile
 * Update user profile
 */
async function updateOneProfile() {
  return fetch(userRoutes.postUserSignup(), requestOptions.put())
    .then((res) => {
      if (!res.ok) return Promise.reject('Unable to update one user profile.');
      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      throw err;
    });
}
