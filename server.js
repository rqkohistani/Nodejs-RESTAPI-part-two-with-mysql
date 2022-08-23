import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes, { notFoundRoute } from './routes';
import errorHandler from './errorHandler';

const port = process.env.PORT || 4000;
const app = express();

const config = () => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(cors());
};

const serve = async () => {
  app.use('/api/v2/', routes());
  app.use(notFoundRoute);
  app.use(errorHandler);

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is up on port ${port}`);
  });
};

const init = async () => {
  config();
  await serve();
};

init();
