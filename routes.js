import express from 'express';
import customerRoutes from './modules/customer/customer.routes';

// TODO: Add Routes NOT FOUND
export const notFoundRoute = (req, res) => res.status(404).send({ message: 'TODO: Add route Not Found message' });

const routes = () => {
  const router = express.Router();
  router.use('/customers', customerRoutes());

  return router;
};

export default routes;
