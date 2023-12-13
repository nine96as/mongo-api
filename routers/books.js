import { Router } from 'express';
import { create, index, show, update } from '../controllers/books.js';

const booksRouter = Router();

booksRouter.get('/', index);
booksRouter.post('/', create);
booksRouter.get('/:id', show);
booksRouter.patch('/:id', update);

export default booksRouter;
