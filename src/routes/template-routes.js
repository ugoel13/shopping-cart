const xhr = require("../utils/api"),
  express = require("express"),
  router = express.Router();
const PORT = process.env.PORT || 3000;

router.get(/\/($|home\W)/, (req, res) => {
  Promise.all([
    xhr(`http://localhost:${PORT}/api/banners`),
    xhr(`http://localhost:${PORT}/api/categories`)
  ])
    .then(([banners, categories]) => {
      res.render("home", { title: "Home page", banners, categories });
    })
    .catch(err => res.send("Ops, something has gone wrong"));
});

router.get("/products", (req, res) => {
  Promise.all([xhr(`http://localhost:${PORT}/api/products`)])
    .then(([products]) => {
      res.render("products", { title: "Products page", products });
    })
    .catch(err => res.send("Ops, something has gone wrong"));
});
module.exports = router;
