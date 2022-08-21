import express from 'express';

import con from './dbConnection';

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;
app.get('/api/v2/users', async (req, res) => {
  try {
    const users = await con.promise().query('SELECT * FROM users');
    if (!users[0]) {
      res.status(404).send('No users found');
      return;
    }
    res.send(users[0]);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up on port ${port}`);
});
