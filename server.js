import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

const port = process.env.DEFAULT_DB_PORT || 4000;
const app = express();

const config = () => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(cors());
};

const serve = async () => {
  app.use('/api/v2/', routes);

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is up on port ${port}`, routes);
  });
};

const init = async () => {
  config();
  await serve();
};

init();
