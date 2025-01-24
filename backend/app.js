// backend/app.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db-config"); // MongoDB connection function
const User = require("./models/User"); // User model
const loginRoute = require("./api/login");
const registerRoute = require("./api/register");

// Create an instance of an express application
const app = express();

// CORS configuration to allow requests from your frontend (Next.js)
const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? "https://your-frontend-url.vercel.app" // Replace with your frontend URL
    : "http://localhost:3000", // Allow frontend to access backend during local development
  methods: ["GET", "POST"], // Allow specific HTTP methods
  allowedHeaders: ["Content-Type"], // Allow headers
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Basic route (optional)
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Register route (used for user registration)
app.use("/api/register", registerRoute);

// Login route (used for user login)
app.use("/api/login", loginRoute);

// Connect to MongoDB
connectDB();

// Export Express app to work with serverless functions
module.exports = (req, res) => {
  app(req, res); // This makes sure Vercel knows how to handle requests
};
