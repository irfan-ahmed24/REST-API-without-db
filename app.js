const express = require("express");
const app = express();
const userRoute = require("./Router/users.route");
const productRoute = require("./Router/products.route");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (rea, res) => {
  res.sendFile(__dirname + "/View/index.html");
});
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use((req, res) => {
  res.send("404 not found");
});
module.exports = app;
