import { Router } from 'express';
import { create, index, show } from '../controllers/books.js';

const booksRouter = Router();

booksRouter.get('/', index);
booksRouter.post('/', create);
booksRouter.get('/:id', show);

export default booksRouter;
