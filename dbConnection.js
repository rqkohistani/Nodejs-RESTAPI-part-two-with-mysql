// https://www.youtube.com/watch?v=7S_tz1z_5bA
import mysql from 'mysql2';

// create the connection to database
const con = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'secureNodeJsRestAPIsDB_partTwo_v2',
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
