const products = require("../models/products.modle");
const { v4: uuidv4 } = require("uuid");

const getProduct = (req, res) => {
  res.send(products);
};

const saveProduct = (req, res) => {
  const newProduct = {
    id: uuidv4(),
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.json({ massage: "new product added successfully" });
};

module.exports = { getProduct, saveProduct };
