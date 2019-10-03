const express = require("express");
const app = express();
const path = require("path");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const apiRoutes = require("../src/routes/api-routes");
const templateRoutes = require("../src/routes/template-routes");

const PORT = process.env.PORT || 3000;

/* set hbs view */
app.engine(
  "hbs",
  hbs({
    layoutsDir: path.join(__dirname, "./../src/views/layouts/"),
    defaultLayout: "main",
    extname: "hbs"
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./../src/views"));

/* routes */

console.log("process.env.API_DOMAIN: ", process.env.API_DOMAIN);
/* middlewares */
app.use(express.static(__dirname + "./../src"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", apiRoutes);
app.use("/", templateRoutes);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
