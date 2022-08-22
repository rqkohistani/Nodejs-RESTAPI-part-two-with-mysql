import express from 'express';
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from './user.controller';

const routes = () => {
  const userRouter = express.Router();
  userRouter.get('/', getAllUsers);
  userRouter.get('/:id', getUser);
  userRouter.post('/', createUser);
  userRouter.patch('/:id', updateUser);
  userRouter.delete('/:id', deleteUser);

  return userRouter;
};
export default routes;
