import { requestOptions } from '../_helpers/request-options';
import { handleResponse } from '../_helpers/handle-response';
import { userRoutes } from '../config/api/routes/user.routes.config';

import UserModel from '../_models/user/user.model';

export const userService = {
  retrieveOneProfile,
  updateOneProfile,
};

/**
 * POST: User Profile
 * Retrieves user profile
 * @param {Object} customHeaders
 * @returns {UserModel}
 */
async function retrieveOneProfile(customHeaders) {
  return fetch(
    userRoutes.userProfile(),
    requestOptions.post(null, customHeaders)
  )
    .then(handleResponse)
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
 * @param {String} payload.firstName
 * @param {String} payload.lastName
 * @param {Object} customHeaders
 * @returns {UserModel}
 */
async function updateOneProfile(payload, customHeaders) {
  return fetch(
    userRoutes.userProfile(),
    requestOptions.put(payload, customHeaders)
  )
    .then(handleResponse)
    .then((res) => {
      if (!res.ok) return Promise.reject('Unable to update one user profile.');
      return res.json();
    })
    .then((res) => new UserModel(res.body))
    .catch((err) => {
      throw err;
    });
}
