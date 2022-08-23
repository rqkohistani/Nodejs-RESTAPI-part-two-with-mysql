import { validateJsonSchema } from '../../utils/validation.util';
import { createCustomerSchema, updateCustomerSchema, deleteCustomerSchema } from './schemas';

const createCustomer = (req, res, next) => {
  const customer = {
    ...req.body,
  };
  validateJsonSchema(createCustomerSchema, customer);
  req.body = customer; // req.body is the data sent to the server in the request body. req.body is a property on the request object.
  // req.body.customer = customer; // req.body.customer is a property on the request object.
  next();
};

const updateCustomer = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const customer = {
    ...req.body,
    id,
  };
  validateJsonSchema(updateCustomerSchema, customer);
  delete customer.id;
  /**
   * Id is not allowed to be updated and is therefore removed from the score object.
   * It is only used for validation. The id is taken from the url. This is done to prevent the id from being updated.
   * or updateCustomerSchema.properties remove it    "id": { "type": "integer" }, However, this is not recommended.
   */
  req.body = customer;
  next();
};

const deleteCustomer = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const customer = {
    id,
  };
  validateJsonSchema(deleteCustomerSchema, customer);
  next();
};

export { createCustomer, updateCustomer, deleteCustomer };

const customerValidators = {
  createCustomer,
  updateCustomer,
  deleteCustomer,
};

export default customerValidators;
