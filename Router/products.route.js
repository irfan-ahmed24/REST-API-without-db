const route = require("express").Router();
const { getProduct, saveProduct } = require("../controllers/products.control");

route.get("/", getProduct);
route.post("/", saveProduct);

module.exports = route;
