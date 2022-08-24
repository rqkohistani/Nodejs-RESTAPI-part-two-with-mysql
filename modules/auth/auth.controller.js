import authService from './auth.service';

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { token, admin } = await authService.login(email, password);
    res.status(201).send({ token, admin });
  } catch (error) {
    next(error);
  }
};

const getAdminFromAuthToken = async (req, res, next) => {
  // getAdminFromAuthToken indicates who is logged in.
  try {
    const admin = await authService.getAdminFromAuthToken(req.headers?.authorization);
    res.status(200).send(admin);
  } catch (error) {
    next(error);
  }
};

const authController = {
  login,
  getAdminFromAuthToken,
};

export default authController;

export { login, getAdminFromAuthToken };
