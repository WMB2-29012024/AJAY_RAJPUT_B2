const express = require("express");
const userRoutes = express.Router();
const projectRoutes = express.Router();
const workspaceRoutes = express.Router();
const { addNewUser } = require("../controllers/addNewUser");
const { getUser } = require("../controllers/getUser");
const { userLogin } = require("../controllers/userLogin");

// userRoutes.use("*", );
const logger = (req, res, next) => {
  console.log("inside routes", req.body);
  next();
};

userRoutes.post("/user-post", logger, addNewUser);
userRoutes.get("/data/:user/vector", getUser);

userRoutes.use("*", (req, res, next) => {
  console.log("inside routes", req.body);
  res.status(404).json("mera mann yaha aisa hi hota hai");
  // next();
});

userRoutes.get("/login", userLogin);

module.exports = userRoutes;
