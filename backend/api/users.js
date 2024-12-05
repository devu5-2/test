const dbConnect = require("../utils/dbConnect");
const User = require("../models/User");

module.exports = async (req, res) => {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { name, contactNo, requirement, budget } = req.body;
      const newUser = new User({ name, contactNo, requirement, budget });
      await newUser.save();
      res.status(201).json({ message: "User information saved successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to save user information" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
