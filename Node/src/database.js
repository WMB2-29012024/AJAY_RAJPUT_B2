const mongoose = require("mongoose");
const uri = "mongodb+srv://ajayrajthakur111:Asdfg111@customerdata.gemaghs.mongodb.net/sample_airbnb?retryWrites=true&w=majority&appName=CustomerData";


mongoose
  .connect(uri)
  .then((mongoObject) => console.log("connected"));
