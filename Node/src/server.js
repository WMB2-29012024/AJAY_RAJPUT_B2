const bodyParser = require("body-parser");
const expressApp = require("express");
const userRoutes = require("./routes/userRoutes");
const database = require("./database")
const server = expressApp();
const PORT = 2334;

server.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
server.use(bodyParser.json());

server.use("*", (req, res, next) => {
  console.log("body", req.body);
  next();
});

server.use("/users", userRoutes);

server.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
