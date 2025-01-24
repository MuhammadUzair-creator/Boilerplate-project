// backend/api/register.js

import connectDB from "../../config/db-config";
import User from "../../models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      await connectDB();

      // Check if the user already exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Create a new user
      const newUser = new User({ email, password });

      // Save the user
      await newUser.save();
      
      res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
