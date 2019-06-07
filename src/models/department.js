const mongoose = require("mongoose");

const departamentSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  position: {
    type: [
      {
        name: { type: String },
        philosophical: { type: [], default: [] },
        technical: { type: [], default: [] }
      }
    ]
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("Department", departamentSchema);
