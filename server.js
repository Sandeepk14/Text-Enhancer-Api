require("dotenv").config();
const express = require("express");
const cors = require("cors");
const textRoutes = require("./src/routes/textRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount API routes
app.use("/api", textRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

module.exports = app;
