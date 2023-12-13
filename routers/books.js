import { Router } from 'express';
import { create, destroy, index, show, update } from '../controllers/books.js';

const booksRouter = Router();

booksRouter.get('/', index);
booksRouter.post('/', create);
booksRouter.get('/:id', show);
booksRouter.patch('/:id', update);
booksRouter.delete('/:id', destroy);

export default booksRouter;
