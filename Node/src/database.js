const mongoose = require("mongoose");
const uri =
  "mongodb+srv://yash:yash123@farzi-cluster.l3ob6ss.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=farzi-cluster";

mongoose
  .connect(uri)
  .then((mongoObject) => console.log("connected"));
