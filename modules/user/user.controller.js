import { HttpError } from '../../errors';
import userService from './user.service';
// TODO: Handle error for all routes

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    if (!users[0]) {
      throw new HttpError(404, 'No users found');
    }
    const [usersObject] = users;
    res.send(usersObject);
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await userService.getUser(id);
    if (!user[0]) {
      throw new HttpError(404, 'No user found');
    }
    const [userObject] = user[0];
    res.send(userObject);
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    if (!user[0]) {
      throw new HttpError(404, 'No user found');
    }
    const [userObject] = user[0];
    res.send(userObject);
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await userService.updateUser(id, req.body);
    if (!user[0]) {
      throw new HttpError(404, 'No user found');
    }
    const [userObject] = user[0];
    res.send(userObject);
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await userService.deleteUser(id);
    if (!user[0]) {
      throw new HttpError(404, 'No user found');
    }
    const [userObject] = user[0];
    res.send(userObject);
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

const userController = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

export default userController;
export { getAllUsers, getUser, createUser, updateUser, deleteUser };
