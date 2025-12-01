const users = require("../models/user.model");

const getUsers = (req, res) => {
  res.send(users);
};

module.exports = { getUsers };
