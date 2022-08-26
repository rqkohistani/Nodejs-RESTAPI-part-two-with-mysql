import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { HttpError } from '../../errors';
import adminService from '../admin/admin.service';
import { AUTH_DURATION_MS } from '../../constants';

const comparePassword = async (password, hash) => bcrypt.compareSync(password, hash);

const generateToken = async (admin) => {
  const token = jwt.sign({ id: admin.id }, process.env.APPSETTING_JWT_SECRET, {
    expiresIn: AUTH_DURATION_MS,
  });
  return token;
};

const getAdminFromAuthToken = async (authToken) => {
  try {
    const token = authToken?.split('Bearer ').pop();
    if (!token) throw new HttpError(401, 'No token provided');
    const { id } = jwt.verify(token, process.env.APPSETTING_JWT_SECRET);
    const admin = adminService.getAdmin(id);
    if (!admin) throw new HttpError(401, 'Invalid token');
    return admin;
  } catch (err) {
    throw new HttpError(401, 'Invalid token');
  }
};

const authService = {
  generateToken,
  comparePassword,
  getAdminFromAuthToken,
};

export default authService;
