const UserModel = require("../dbModels/user-model")
const data = require("../data");

const addNewUser = async (req, res, next) => {
  const { query, body, params, headers } = req;
  console.log({
    body: JSON.parse(JSON.stringify(body)),
    query,
    params,
    headers,
  });
  const user1 = await UserModel({
    username: body.name,
    age: body.age,
    email: body.email,
  });
  await user1.save();
  res.status(201).json(data);
};

module.exports = { addNewUser };
