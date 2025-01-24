// backend/api/login.js

import connectDB from "../../config/db-config";
import User from "../../models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      // Ensure the database is connected
      await connectDB();

      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      // Check if the password matches
      if (user.password !== password) {
        return res.status(400).json({ message: "Incorrect password" });
      }

      // If the email and password are correct
      res.status(200).json({ message: "Login successful!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
