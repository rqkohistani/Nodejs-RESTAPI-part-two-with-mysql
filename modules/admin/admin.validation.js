import { validateJsonSchema } from '../../utils/validation.util';
import { createAdminSchema, updateAdminSchema, deleteAdminSchema } from './schemas';

const createAdmin = (req, res, next) => {
  const admin = {
    ...req.body,
  };
  validateJsonSchema(createAdminSchema, admin);
  req.body = admin;
  next();
};

const updateAdmin = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const admin = {
    ...req.body,
    id,
  };
  validateJsonSchema(updateAdminSchema, admin);
  delete admin.id;
  req.body = admin;
  next();
};

const deleteAdmin = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const admin = {
    id,
  };
  validateJsonSchema(deleteAdminSchema, admin);
  next();
};

export { createAdmin, deleteAdmin, updateAdmin };

const adminValidators = {
  createAdmin,
  updateAdmin,
  deleteAdmin,
};

export default adminValidators;
