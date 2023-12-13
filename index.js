import 'dotenv/config';
import mongoose from 'mongoose';
import { app } from './app.js';

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(
        `Server running on port: http://localhost:${process.env.PORT}`
      )
    );
  })
  .catch((e) => console.log(e));
