import express from 'express';
import con from './dbConnection';

const routes = () => {
  const userRouter = express.Router();

  userRouter.get('/', async (req, res) => {
    try {
      const users = await con.promise().query('SELECT * FROM users');
      if (!users[0]) {
        res.status(404).send('No users found');
        return;
      }
      res.send(users[0]);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  return userRouter;
};

export default routes;
