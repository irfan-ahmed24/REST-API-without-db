const saveUser = require("../controllers/saveUser.control");
const { getUsers } = require("../controllers/users.control");

const route = require("express").Router();

route.get("/", getUsers);
route.post("/", saveUser);

module.exports = route;
