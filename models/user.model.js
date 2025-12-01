const { v4: uuidv4 } = require("uuid");

const users = [
  {
    Id: uuidv4(),
    name: "irfan ahmed",
    age: 24,
    email: "irfanahmed99989@gmail.com",
  },
  {
    Id: uuidv4(),
    name: "forhad islam",
    age: 23,
    email: "farhadahmed99989@gmail.com",
  },
];
module.exports = users;
