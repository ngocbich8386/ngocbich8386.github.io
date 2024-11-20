const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  User_name: { type: String, required: true },
  Password: { type: String, required: true },
  Profile_image: { type: String },
  Customer_ID: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" }, // Liên kết tới Customer
});

const User = mongoose.model("User", userSchema);
module.exports = User;