const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define Schema and Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  requirement: { type: String, required: true },
  budget: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);

// Routes
app.post("/api/users", async (req, res) => {
  try {
    const { name, contactNo, requirement, budget } = req.body;
    const newUser = new User({ name, contactNo, requirement, budget });
    await newUser.save();
    res.status(201).json({ message: "User information saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save user information" });
  }
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
