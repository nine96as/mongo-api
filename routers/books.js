import { Router } from 'express';
import { create, index } from '../controllers/books.js';

const booksRouter = Router();

booksRouter.post('/', create);
booksRouter.get('/', index);

export default booksRouter;
