const mongoose = require('mongoose');
const JobRole = mongoose.model('JobRole');

module.exports = {
  async create(req, res, next) {
    try {
      const jobRole = await JobRole.create(req.body);

      res.json(jobRole);
    } catch (error) {
      next(error);
    }
  },
  async show(req, res, next) {
    try {
      const jobRole = await JobRole.findById(req.params.id);

      res.json(jobRole);
    } catch (error) {
      next(error);
    }
  },
  async index(req, res, next) {
    try {
      const jobRoles = await JobRole.find();

      res.json(jobRoles);
    } catch (error) {
      next(error);
    }
  },
  async destroy(req, res, next) {
    try {
      const jobRole = await JobRole.findByIdAndDelete(req.params.id);

      res.json(jobRole);
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const jobRole = await JobRole.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      await jobRole.save();

      res.json(jobRole);
    } catch (error) {
      next(error);
    }
  },
};
