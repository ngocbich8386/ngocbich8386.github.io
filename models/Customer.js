const mongoose = require('mongoose'); // Import Mongoose
const Schema = mongoose.Schema; // Lấy Schema từ Mongoose

const customerSchema = new Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    DOB: { type: String }, // Không bắt buộc
    Phone_number: { type: String, required: true },
    Address: { type: String },
  });
  
  const Customer = mongoose.model("Customer", customerSchema);
  module.exports = Customer;
  