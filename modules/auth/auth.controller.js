import authService from './auth.service';
import adminService from '../admin/admin.service';
import { HttpError } from '../../errors';

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const [admin] = await adminService.getAdminByEmail(email);
    if (!admin) throw new HttpError(401, 'Invalid email or password');
    const isPasswordValid = await authService.comparePassword(password, admin.password);
    if (!isPasswordValid) throw new HttpError(400, 'Invalid email or password');
    delete admin.password;
    const token = await authService.generateToken(admin);
    return res.status(200).json({ token, admin });
  } catch (err) {
    return next(err);
  }
};

const getAdminFromAuthToken = async (req, res, next) => {
  // getAdminFromAuthToken indicates who is logged in.
  try {
    const [admin] = await authService.getAdminFromAuthToken(req.headers?.authorization);
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
