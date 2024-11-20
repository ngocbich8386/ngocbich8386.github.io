const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const db = require("./config/db");


// Kết nối cơ sở dữ liệu
db.connect();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
const userRoutes = require("./routes/userRoutes");
const creatorRoutes = require("./routes/creatorRoutes");
const artworkRoutes = require("./routes/artworkRoutes");
const customerRoutes = require("./routes/customerRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

// Sử dụng routes
app.use("/users", userRoutes);
app.use("/creators", creatorRoutes);
app.use("/artworks", artworkRoutes);
app.use("/customers", customerRoutes);
app.use("/categories", categoryRoutes);

// Khởi chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


