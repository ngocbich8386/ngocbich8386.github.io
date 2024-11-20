const mongoose = require('mongoose'); // Import Mongoose
const Schema = mongoose.Schema; // Lấy Schema từ Mongoose

const creatorSchema = new Schema({
  Name: { type: String, required: true },
  Phone_number: { type: String, required: true },
  Creator_TaxCode: { type: Number, required: true },
  Citizen_ID: { type: String, required: true },
  User_ID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // Liên kết tới User
});

const Creator = mongoose.model("Creator", creatorSchema);
module.exports = Creator;
