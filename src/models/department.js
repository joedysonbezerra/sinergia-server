const mongoose = require("mongoose");

const departamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true,
    unique: true
  },
  philosophical: [],
  technical: [],
  createAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("Department", departamentSchema);
