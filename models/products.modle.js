const { v4: uuidv4 } = require("uuid");

const products = [
  {
    id: uuidv4(),
    name: "iphone",
    price: 400,
  },
  {
    id: uuidv4(),
    name: "mobile",
    price: 200,
  },
];

module.exports = products;
