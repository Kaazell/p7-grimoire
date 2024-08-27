const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config");
const bookCtrl = require("../controllers/book");

router.get("/", bookCtrl.getAllBooks);
router.post("/", auth, multer, bookCtrl.createBook);
router.get("/:id", bookCtrl.getOneBook);
router.put("/:id", auth, multer, bookCtrl.modifyBook);
router.delete("/:id", auth, bookCtrl.deleteBook);
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
