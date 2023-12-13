import { Book } from '../models/Book.js';

export const index = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      count: books.length,
      data: books
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const create = async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    if (!title || !author || !publishYear)
      return res.status(400).json({
        error: 'You must send all required fields: title, author, publishYear'
      });

    return res.status(201).json(
      await Book.create({
        title: title,
        author: author,
        publishYear: publishYear
      })
    );
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const show = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json(await Book.findById(id));
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;
    if (!title && !author && !publishYear)
      return res.status(400).json({
        error: 'You must specify one of: title, author, publishYear'
      });

    res
      .status(200)
      .json(await Book.findByIdAndUpdate(id, req.body, { new: true }));
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json(await Book.findByIdAndDelete(id));
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};
