const getProduct = require("../controllers/products.control");

const route = require("express").Router();

route.get("/", getProduct);

module.exports = route;
