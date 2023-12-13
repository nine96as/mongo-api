import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import booksRouter from './routers/books.js';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use('/books', booksRouter);

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Books API',
    description: 'TBC',
    endpoints: [['POST  /books']]
  });
});
