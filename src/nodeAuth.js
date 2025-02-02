// const express = require("express");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());

// const JWT_SECRET = "PassarinhoQueComePedraSabeOcuQuetem";

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/customers", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // User model
// const UserSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });
// const User = mongoose.model("User", UserSchema);

// // Customer model
// const CustomerSchema = new mongoose.Schema({
//   name: String,
//   email: String,
// });
// const Customer = mongoose.model("Customer", CustomerSchema);

// // Register user
// app.post("/register", async (req, res) => {
//   const { email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   await User.create({ email, password: hashedPassword });
//   res.send("User registered");
// });

// // Login with email
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     return res.status(401).send("Invalid credentials");
//   }
//   const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
//   res.json({ token });
// });

// // Middleware to verify JWT
// function authMiddleware(req, res, next) {
//   const token = req.headers["authorization"];
//   if (!token) return res.status(403).send("Unauthorized");
//   try {
//     const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).send("Invalid token");
//   }
// }

// // CRUD routes for customers
// app.get("/customers", authMiddleware, async (req, res) => {
//   const customers = await Customer.find();
//   res.json(customers);
// });

// app.post("/customers", authMiddleware, async (req, res) => {
//   const customer = await Customer.create(req.body);
//   res.json(customer);
// });

// app.put("/customers/:id", authMiddleware, async (req, res) => {
//   const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(customer);
// });

// app.delete("/customers/:id", authMiddleware, async (req, res) => {
//   await Customer.findByIdAndDelete(req.params.id);
//   res.send("Customer deleted");
// });

// // app.listen(3000, () => console.log("Server running on port 3000"));
