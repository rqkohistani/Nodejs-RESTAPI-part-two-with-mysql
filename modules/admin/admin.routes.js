/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import { getAllAdmins, getAdmin, createAdmin, deleteAdmin, updateAdmin } from './admin.controller';
import adminValidators from './admin.validation';
// import securityMiddleware from '../../middleware/security';

const routes = () => {
  const adminRouter = express.Router();

  adminRouter.get('/', getAllAdmins);
  // adminRouter.get('/', securityMiddleware, getAllAdmins);
  adminRouter.get('/:id', getAdmin);
  // adminRouter.get('/:id', securityMiddleware, getAdmin);
  // adminRouter.post('/', createAdmin);
  adminRouter.post('/', adminValidators.createAdmin, createAdmin);
  // adminRouter.post('/', securityMiddleware, adminValidators.createAdmin, createAdmin);
  // adminRouter.delete('/:id', deleteAdmin);
  adminRouter.delete('/:id', adminValidators.deleteAdmin, deleteAdmin);
  // adminRouter.delete('/:id', securityMiddleware, adminValidators.deleteAdmin, deleteAdmin);
  // adminRouter.patch('/:id', updateAdmin);
  adminRouter.patch('/:id', adminValidators.updateAdmin, updateAdmin);
  // adminRouter.patch('/:id', securityMiddleware, adminValidators.updateAdmin, updateAdmin);

  return adminRouter;
};

export default routes;
