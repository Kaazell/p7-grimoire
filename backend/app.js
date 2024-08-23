const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/api/books", (req, res, next) => {
  const books = [
    {
      userId: "oeihfzeoi",
      title: "Game of Thrones",
      author: "George R. R. Martin",
      imageUrl:
        "https://m.media-amazon.com/images/I/71FSL3C24dL._AC_UF1000,1000_QL80_.jpg",
      year: 1996,
      genre: "Roman",
      ratings: [
        {
          userId: "oeihfzeoi",
          grade: 5,
        },
      ],
      averageRating: 5,
    },
  ];
  res.status(200).json(books);
});

module.exports = app;
