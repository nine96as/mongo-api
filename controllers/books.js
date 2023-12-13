import { Book } from '../models/Book.js';

export const index = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export const create = async (req, res) => {
  const { title, author, publishYear } = req.body;
  try {
    if (!title || !author || !publishYear)
      return res.status(400).send({
        error: 'You must send all required fields: title, author, publishYear'
      });

    const book = await Book.create({
      title: title,
      author: author,
      publishYear: publishYear
    });

    return res.status(201).json(book);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
