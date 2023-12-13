import 'dotenv/config';
import mongoose from 'mongoose';

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log('API connected to DB'))
  .catch((e) => console.log(e));
