const mongoose = require('mongoose'); // Import Mongoose
const Schema = mongoose.Schema; // Lấy Schema từ Mongoose

const categorySchema = new Schema({
  Category_name: { type: String, required: true },
  Category_description: { type: String, required: true },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
