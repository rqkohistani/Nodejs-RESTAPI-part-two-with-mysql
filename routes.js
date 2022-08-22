import express from 'express';
import userRoutes from './modules/user/user.routes';

const routes = () => {
  const router = express.Router();
  router.use('/users', userRoutes());

  return router;
};

export default routes;
