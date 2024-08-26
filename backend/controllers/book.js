const Book = require("../models/book");

exports.createBook = (req, res, next) => {
  console.log("Request Body:", req);

  delete req.body.userId;
  const book = new Book({
    ...req.body,
  });
  book
    .save()
    .then(() => res.status(201).json({ message: "Livre enregistré !" }))
    .catch((error) => {
      console.error("Error details:", error);
      res.status(400).json({ error });
    });
};

exports.deleteBook = (req, res) => {
  console.log("delete");
  Book.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Livre supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};
exports.modifyBook = (req, res) => {
  console.log("Modify");
  Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Livre modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};
exports.getOneBook = (req, res) => {
  console.log("getOneBook");
  Book.findOne({ _id: req.params.id })
    .then((book) => res.status(200).json(book))
    .catch((error) => res.status(404).json({ error }));
};
exports.getAllBooks = (req, res) => {
  console.log("getAllBooks");
  Book.find()
    .then((books) => res.status(200).json(books))
    .catch((error) => res.status(400).json({ error }));
};
