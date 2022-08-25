import express from 'express';

import {
  createPostByCustomerId,
  deletePost,
  getPostByCustomerId,
  getPostById,
  updatePost,
} from './customer.post.controller';
import customerPostValidators from './customer.post.validation';

const routes = () => {
  const customerPostRouter = express.Router();
  customerPostRouter.get('/', getPostById); // get post by post id as query params {req.query.postId}
  customerPostRouter.get('/:customerId', getPostByCustomerId);
  customerPostRouter.post('/', customerPostValidators.createCustomerPost, createPostByCustomerId);
  customerPostRouter.patch('/:postId', customerPostValidators.updateCustomerPost, updatePost);
  customerPostRouter.delete('/:postId', customerPostValidators.deleteCustomerPost, deletePost);

  return customerPostRouter;
};

export default routes;
