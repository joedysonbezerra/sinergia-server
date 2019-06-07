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
  departmentId: {
    type: Number,
    required: true
  },
  positionId: {
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
  gradesPhilosophical: {
    type: [
      {
        grade: {
          type: Number
        },
        comments: {
          type: String
        },
        weight: {
          type: Number
        }
      }
    ]
  },
  gradesTechnical: {
    type: [
      {
        grade: {
          type: Number
        },
        weight: {
          type: Number
        }
      }
    ]
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("Employee", employeeSchema);
