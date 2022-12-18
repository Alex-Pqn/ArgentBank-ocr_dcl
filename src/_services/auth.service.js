import { requestOptions } from '../_helpers/request-options';
import { handleResponse } from '../_helpers/handle-response';
import { authRoutes } from '../config/api/routes/auth.routes.config';

import AuthLoginModel from '../_models/auth/auth.login.model';

export const authService = {
  loginOne,
};

/**
 * POST: Auth Login
 * @param {String} payload.email
 * @param {String} payload.password
 * @param {Object} payload.customHeaders
 * @returns {AuthLoginModel}
 */
function loginOne(payload, customHeaders) {
  return fetch(
    authRoutes.authLogin(),
    requestOptions.post(payload, customHeaders)
  )
    .then(handleResponse)
    .then((res) => {
      if (res.status === 400)
        return Promise.reject('Email or password incorrect.');
      if (!res.ok)
        return Promise.reject('Unable to login. Please try again later.');

      return res.json();
    })
    .then((req) => new AuthLoginModel(req.body))
    .catch((err) => {
      throw err;
    });
}
