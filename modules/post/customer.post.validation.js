/* eslint-disable import/prefer-default-export */
import { parseToIntIfPossible } from '../../utils/helper.util';
import { validateJsonSchema } from '../../utils/validation.util';
import {
  createCustomerPostSchema,
  updateCustomerPostSchema,
  deleteCustomerPostSchema,
  getCustomerPostsSchema,
} from './schemas';

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

const getCustomerPosts = (req, res, next) => {
  const postIdQueryParams = {
    postId: parseToIntIfPossible(req.query.postId),
  };
  validateJsonSchema(getCustomerPostsSchema, postIdQueryParams);
  req.query = postIdQueryParams;
  next();
};

export { createCustomerPost, updateCustomerPost, deleteCustomerPost };

const customerPostValidators = {
  createCustomerPost,
  updateCustomerPost,
  deleteCustomerPost,
  getCustomerPosts,
};
export default customerPostValidators;
