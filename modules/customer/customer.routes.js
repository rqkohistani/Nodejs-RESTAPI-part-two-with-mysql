import express from 'express';
import { getAllCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer } from './customer.controller';

const routes = () => {
  const customerRouter = express.Router();
  customerRouter.get('/', getAllCustomers);
  customerRouter.get('/:id', getCustomer);
  customerRouter.post('/', createCustomer);
  customerRouter.patch('/:id', updateCustomer);
  customerRouter.delete('/:id', deleteCustomer);

  return customerRouter;
};
export default routes;
