import { getApi } from '../api.config';

const getBaseRoute = () => getApi() + '/user';

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
 * @returns User Profile
 */
const putUserProfile = () => getBaseRoute() + '/profile';

export const userRoutes = {
  postUserLogin,
  postUserProfile,
  putUserProfile,
};
