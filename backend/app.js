const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db-config"); // MongoDB connection function
const User = require("./models/User"); // User model

// Create an instance of an express application
const app = express();

// CORS configuration to allow requests from your frontend (Next.js)
// Use the environment variable for production or localhost for development
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? "https://your-frontend-url.vercel.app" // Replace with your Vercel frontend URL
    : "http://localhost:3000", // Allow frontend to access backend during local development
  methods: ["GET", "POST"], // Allow specific HTTP methods
  allowedHeaders: ["Content-Type"], // Allow headers
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Basic route (optional)
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Set up the server to listen on a port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
