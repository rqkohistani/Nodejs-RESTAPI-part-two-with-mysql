/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import { getAllCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer } from './customer.controller';
import customerValidators from './customer.validation';

const routes = () => {
  const customerRouter = express.Router();
  customerRouter.get('/', getAllCustomers);
  customerRouter.get('/:id', getCustomer);
  customerRouter.post('/', customerValidators.createCustomer, createCustomer);
  customerRouter.patch('/:id', customerValidators.updateCustomer, updateCustomer);
  customerRouter.delete('/:id', customerValidators.deleteCustomer, deleteCustomer);

  return customerRouter;
};
export default routes;
