import con from '../../dbConnection';

const getAllUsers = async () => {
  const query = 'SELECT * FROM users';
  const users = await con.promise().query(query);
  return users;
};

const getUser = async (id) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  const user = await con.promise().query(query, [id]);
  return user;
};

const createUser = async (user) => {
  const query = 'INSERT INTO users SET ?';
  const newUser = await con.promise().query(query, user);
  return newUser;
};

const updateUser = async (userId, user) => {
  const query = 'UPDATE users SET ? WHERE id = ?';
  const updatedUser = await con.promise().query(query, [user, userId]);
  return updatedUser;
};

const deleteUser = async (id) => {
  const query = 'DELETE FROM users WHERE id = ?';
  const deletedUser = await con.promise().query(query, id);
  return deletedUser;
};

const userService = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

export default userService;
