const mongoose = require("mongoose");

const user = mongoose.Schema({
    username: {type: String, default: "Yash", required: true},
    age: {type: Number, default: 30},
    email: {type: String}
})

const UserModel = mongoose.model("xyz", user)

module.exports = {
    UserModel
}