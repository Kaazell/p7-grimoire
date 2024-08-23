require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
console.log(
  `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.DB_URL}`
);
mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.DB_URL}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

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
