/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import { login, getAdminFromAuthToken } from './auth.controller';
import authValidators from './auth.validation';

const routes = () => {
  const authRouter = express.Router();

  authRouter.post('/login', authValidators.login, login);
  authRouter.get('/me', getAdminFromAuthToken);

  return authRouter;
};

export default routes;
