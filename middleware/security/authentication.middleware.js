import authService from '../../modules/auth/auth.service';

const verifyToken = async (req, res, next) => {
  try {
    const [admin] = await authService.getAdminFromAuthToken(req.headers?.authorization);
    req.currentAdmin = admin;

    return next();
  } catch (error) {
    return next(error);
  }
};

export default verifyToken;
