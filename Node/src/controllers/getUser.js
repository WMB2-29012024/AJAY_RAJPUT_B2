const data = require("../data");

const getUser = (req, res, next) => {
  console.log("user posted", "params", req.params);
  res.status(203).json(data);
};

module.exports = {
  getUser,
};
