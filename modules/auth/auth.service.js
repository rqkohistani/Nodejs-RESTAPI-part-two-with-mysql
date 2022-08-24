import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { HttpError } from '../../errors';
import adminService, { getAdminByEmail } from '../admin/admin.service';
import { AUTH_DURATION_MS } from '../../constants';

const login = async (email, password) => {
  const admin = await getAdminByEmail(email);
  if (admin.length === 0) throw new HttpError(401, 'Invalid email or password');
  const isPasswordValid = bcrypt.compareSync(password, admin[0].password);
  if (!isPasswordValid) throw new HttpError(400, 'Invalid email or password');
  delete admin[0].password;

  const token = jwt.sign({ id: admin[0].id }, process.env.APPSETTING_JWT_SECRET, {
    expiresIn: AUTH_DURATION_MS,
  });
  return { token, admin };
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
  login,
  getAdminFromAuthToken,
};

export default authService;
