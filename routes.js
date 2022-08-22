import express from 'express';
import customerRoutes from './modules/customer/customer.routes';

const routes = () => {
  const router = express.Router();
  router.use('/customers', customerRoutes());

  return router;
};

export default routes;
