const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoute");
const customerRoutes = require("./routes/customerRoute");
// const customerRoutes = require("./routes/customerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Register routes
app.use("/api/auth", authRoutes);
app.use("/api/customer", customerRoutes);

module.exports = app;