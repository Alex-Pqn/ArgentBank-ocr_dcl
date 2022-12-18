import { requestOptions } from '../_helpers/request-options';
import { userRoutes } from '../config/api/routes/user.routes.config';

import UserModel from '../_models/user/user.model';

export const userService = {
  retrieveOneProfile,
  updateOneProfile,
};

/**
 * POST: User Profile
 * Retrieves user profile
 * @returns User Profile
 */
async function retrieveOneProfile(payload, customHeaders) {
  return fetch(
    userRoutes.userProfile(),
    requestOptions.post(payload, customHeaders)
  )
    .then((res) => {
      if (!res.ok) return Promise.reject('Unable to get one user profile.');
      return res.json();
    })
    .then((res) => new UserModel(res.body))
    .catch((err) => {
      throw err;
    });
}

/**
 * PUT: User Profile
 * Update user profile
 * @returns User Profile
 */
async function updateOneProfile(payload, customHeaders) {
  return fetch(
    userRoutes.userProfile(),
    requestOptions.put(payload, customHeaders)
  )
    .then((res) => {
      if (!res.ok) return Promise.reject('Unable to update one user profile.');
      return res.json();
    })
    .then((res) => new UserModel(res.body))
    .catch((err) => {
      throw err;
    });
}
