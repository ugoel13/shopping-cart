const express = require("express"),
  router = express.Router(),
  banners = require("../utils/mock-response/banners"),
  categories = require("../utils/mock-response/categories"),
  products = require("../utils/mock-response/products"),
  addToCart = require("../utils/mock-response/addToCart");

/* GET */
router.get("/banners", (req, res) => {
  res.json(banners);
});

router.get("/categories", (req, res) => {
  res.json(categories);
});

router.get("/products", (req, res) => {
  res.json(products);
});

/* POST */
router.post("/addToCart", (req, res) => {
  res.json(addToCart);
});

module.exports = router;
