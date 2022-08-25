import express from 'express';

import {
  createPostByCustomerId,
  deletePost,
  getPostByCustomerId,
  getPostById,
  updatePost,
} from './customer.post.controller';

const routes = () => {
  const customerPostRouter = express.Router();
  customerPostRouter.get('/', getPostById); // get post by post id as query params {req.query.postId}
  customerPostRouter.get('/:customerId', getPostByCustomerId);
  customerPostRouter.post('/', createPostByCustomerId);
  customerPostRouter.patch('/:postId', updatePost);
  customerPostRouter.delete('/:postId', deletePost);

  return customerPostRouter;
};

export default routes;
