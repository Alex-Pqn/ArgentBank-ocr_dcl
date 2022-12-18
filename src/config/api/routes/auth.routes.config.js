import { userRoutes } from './user.routes.config';

/**
 * Auth Login Route
 */
const authLogin = () => userRoutes.getBaseRoute() + '/login';

export const authRoutes = {
  authLogin,
};
