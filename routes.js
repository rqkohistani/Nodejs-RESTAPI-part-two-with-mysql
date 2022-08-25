import express from 'express';
import authRouter from './modules/auth/auth.routes';
import adminRouter from './modules/admin/admin.routes';
import customerRouter from './modules/customer/customer.routes';
import customerPostRouter from './modules/post/customer.post.routes';
// TODO: Add Routes NOT FOUND
export const notFoundRoute = (req, res) => res.status(404).send({ message: 'TODO: Add route Not Found message' });

const routes = () => {
  const router = express.Router();
  router.use('/auth', authRouter());
  router.use('/admins', adminRouter());
  router.use('/customers', customerRouter());
  router.use('/posts', customerPostRouter());

  return router;
};

export default routes;
