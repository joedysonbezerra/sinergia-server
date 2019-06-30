const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
      unique: true,
    },
    department: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    jobRole: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    hiringDate: {
      type: Date,
      required: true,
    },
    skills: {
      cultural: [
        {
          id: { type: Number, required: true },
          value: { type: mongoose.Schema.Types.Mixed, required: true },
        },
      ],
      technical: [
        {
          id: { type: Number, required: true },
          value: { type: mongoose.Schema.Types.Mixed, required: true },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Employee', EmployeeSchema);
