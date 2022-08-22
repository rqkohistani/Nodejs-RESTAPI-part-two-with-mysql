// How to connect to a database using Node.js following the below link.
// https://www.youtube.com/watch?v=7S_tz1z_5bA
import mysql from 'mysql2';

const con = mysql.createConnection({
  host: process.env.DEFAULT_MYSQL_HOST,
  port: process.env.DEFAULT_MYSQL_PORT,
  user: process.env.DEFAULT_MYSQL_NAME,
  password: process.env.DEFAULT_MYSQL_PASSWORD,
  database: process.env.DEFAULT_MYSQL_DATABASE,
});

con.connect((err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('Error connecting to Db');
    return;
  }
  // eslint-disable-next-line no-console
  console.log('Connection established');
});

export default con;
