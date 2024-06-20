const data = require("../data");

const userLogin = (req, res, next) => {
  const { userid, password } = req.body;
  const user = Object.keys(data).find((user) => {
    return data[user].id === userid && data[user].password === password;
  });

  if (user) {
    res.status(203).json(user);
  } else {
    res.status(401).json("User not found");
  }
};

module.exports = {
  userLogin,
};
