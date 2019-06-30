const mongoose = require('mongoose');

const JobRoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    skills: {
      cultural: [
        {
          id: { type: Number, required: true, unique: true },
          description: { type: String, required: true },
          weight: { type: Number, required: true },
          questionType: {
            type: String,
            required: true,
            enum: ['boolean', 'numeric', 'nominal'],
          },
        },
      ],
      technical: [
        {
          id: { type: Number, required: true, unique: true },
          description: { type: String, required: true },
          weight: { type: Number, required: true },
          questionType: {
            type: String,
            required: true,
            enum: ['boolean', 'numeric', 'nominal'],
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('JobRole', JobRoleSchema);
