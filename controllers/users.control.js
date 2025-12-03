const users = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");

const getUsers = (req, res) => {
  res.send(users);
};

const saveUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(200).json({ massage: "save data succesfully" });
};

module.exports = { getUsers, saveUser };
