require("dotenv").config();

const express = require("express");
const path = require("path");
const logger = require("./middleware/logger.js");
const compression = require("compression");
const app = express();

// Middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());

// Compression Middleware
app.use(compression());

// Set static folder
app.use(express.static(path.join(__dirname, "../client/dist")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
