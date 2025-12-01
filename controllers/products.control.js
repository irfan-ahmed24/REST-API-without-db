const products = require("../models/products.modle");

const getProduct = (req, res) => {
  res.send(products);
};

module.exports = getProduct;
