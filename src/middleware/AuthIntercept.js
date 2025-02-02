const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.verifyToken = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ error: "Access Denied! No token provided." });
    }

    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = verified; // Attach user data to request
        next(); // Proceed to the next middleware
    } catch (error) {
        res.status(400).json({ error: "Invalid Token!" });
    }
};