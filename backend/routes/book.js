const express = require("express");
const Book = require("../models/book");
const bookCtrl = require("../controllers/book");
const router = express.Router();
const auth = require("../middlewares/auth");

router.delete("/:id", auth, bookCtrl.deleteBook);
router.put("/:id", auth, bookCtrl.modifyBook);
router.post("/", auth, bookCtrl.createBook);
router.get("/", auth, bookCtrl.getAllBooks);
router.get("/:id", auth, bookCtrl.getOneBook);
// router.get("/", (req, res, next) => {
//   const books = [
//     {
//       userId: "oeihfzeoi",
//       title: "Game of Thrones",
//       author: "George R. R. Martin",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71FSL3C24dL._AC_UF1000,1000_QL80_.jpg",
//       year: 1996,
//       genre: "Roman",
//       ratings: [
//         {
//           userId: "oeihfzeoi",
//           grade: 5,
//         },
//       ],
//       averageRating: 5,
//     },
//   ];
//   res.status(200).json(books);
// });

module.exports = router;
