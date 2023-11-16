const express = require("express");
const cors = require("cors");
// Routes imports.
const users = require("./routes/users.js");

// Instance of Express application.
const app = express();
const PORT = process.env.PORT || 3001; // Server port.

// Middlewares.
app.use(express.json()); // Allows the request of json files.
app.use(cors()); // Enable CORS for all routes, allowing requests from other ports.


// Application routes.
app.use("/users", users);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});