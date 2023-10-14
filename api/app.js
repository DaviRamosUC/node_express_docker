// import { Pool } from "pg";
import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT || "5432")
// });

// const connectToDB = async () => {
//   try {
//     await pool.connect();
//   } catch (err) {
//     console.log(err);
//   }
// };

// connectToDB().then(() => {
  app.get('/', (req, res) => {
    res.send('The server is up running');
  });

  app.listen(port, () =>
    console.log(`Server running on port ${port}, http://localhost:${port}`)
  );
// });