/* eslint-disable import/no-named-as-default-member */
import express from 'express';

import {
  createPostByCustomerId,
  deletePost,
  getPostByCustomerId,
  getAllPostsOrGetPostById,
  updatePost,
} from './customer.post.controller';
import customerPostValidators from './customer.post.validation';
import securityMiddleware from '../../middleware/security';

const routes = () => {
  const customerPostRouter = express.Router();
  customerPostRouter.get('/', securityMiddleware, customerPostValidators.getCustomerPosts, getAllPostsOrGetPostById); // get post by post id as query params {req.query.postId}
  customerPostRouter.get('/:customerId', securityMiddleware, getPostByCustomerId);
  customerPostRouter.post('/', securityMiddleware, customerPostValidators.createCustomerPost, createPostByCustomerId);
  customerPostRouter.patch('/:postId', securityMiddleware, customerPostValidators.updateCustomerPost, updatePost);
  customerPostRouter.delete('/:postId', securityMiddleware, customerPostValidators.deleteCustomerPost, deletePost);

  return customerPostRouter;
};

export default routes;
