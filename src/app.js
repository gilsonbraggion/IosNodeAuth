const express = require("express");
const cors = require("cors");

const authRoute = require("./routes/authRoute");
const customerRoute = require("./routes/customerRoute");
const queixaRoute = require("./routes/queixaRoute");

const app = express();

app.use(cors());
app.use(express.json());

// Register routes
app.use("/api/auth", authRoute);
app.use("/api/customer", customerRoute);
app.use("/api/queixa", queixaRoute);


module.exports = app;