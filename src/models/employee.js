const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  office: {
    type: String,
    required: true
  },
  hiringDate: {
    type: Date,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("Employee", employeeSchema);
