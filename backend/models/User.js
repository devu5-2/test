const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNo: { type: String, required: true },
  requirement: { type: String, required: true },
  budget: { type: Number, required: true },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
