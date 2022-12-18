import { getApi } from '../api.config';

const getBaseRoute = () => getApi() + '/user';

/**
 * User Profile Route
 */
const userProfile = () => getBaseRoute() + '/profile';

export const userRoutes = {
  getBaseRoute,
  userProfile,
};
