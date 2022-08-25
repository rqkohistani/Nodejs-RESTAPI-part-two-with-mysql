/* eslint-disable import/prefer-default-export */
import { validateJsonSchema } from '../../utils/validation.util';
import { createCustomerPostSchema, updateCustomerPostSchema, deleteCustomerPostSchema } from './schemas';

const createCustomerPost = (req, res, next) => {
  const customerPost = {
    ...req.body,
  };
  validateJsonSchema(createCustomerPostSchema, customerPost);
  req.body = customerPost;
  next();
};

const updateCustomerPost = (req, res, next) => {
  const customerPost = {
    ...req.body,
  };
  validateJsonSchema(updateCustomerPostSchema, customerPost);
  req.body = customerPost;
  next();
};

const deleteCustomerPost = (req, res, next) => {
  const customerPost = {
    ...req.body,
  };
  validateJsonSchema(deleteCustomerPostSchema, customerPost);
  req.body = customerPost;
  next();
};

export { createCustomerPost, updateCustomerPost, deleteCustomerPost };

const customerPostValidators = {
  createCustomerPost,
  updateCustomerPost,
  deleteCustomerPost,
};
export default customerPostValidators;
