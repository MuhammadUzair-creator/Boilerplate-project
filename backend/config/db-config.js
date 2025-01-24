const mongoose = require('mongoose');

// MongoDB Atlas URI (replace <db_password> with your actual password)
const dbURI = 'mongodb+srv://uzairimran122:TMbPpRK0S1c2QAw2@cluster0.zohva.mongodb.net/?retryWrites=true&w=majority';

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit the process if connection fails
  }
};

// Export the connectDB function
module.exports = connectDB;
