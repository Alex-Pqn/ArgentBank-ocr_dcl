import { getApi } from '../api.config';

const getBaseRoute = () => getApi() + '/user';

/**
 * POST: User Signup
 * Signup user
 * @returns User token
 */
const postUserSignup = () => getBaseRoute() + '/signup';

/**
 * POST: User Login
 * Login user
 * @returns User token
 */
const postUserLogin = () => getBaseRoute() + '/login';

/**
 * POST: User Profile
 * Retrieves user profile
 * @returns User Profile
 */
const postUserProfile = () => getBaseRoute() + '/profile';

/**
 * PUT: User Profile
 * Update user profile
 */
const putUserProfile = () => getBaseRoute() + '/profile';

export const userRoutes = {
  postUserSignup,
  postUserLogin,
  postUserProfile,
  putUserProfile,
};
