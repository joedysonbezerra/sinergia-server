const mongoose = require('mongoose');
const JobRole = mongoose.model('JobRole');

module.exports = {
  async Create(req, res, next) {
    try {
      const jobRole = await JobRole.create(req.body);

      res.json(jobRole);
    } catch (error) {
      next(error);
    }
  },
  async Show(req, res, next) {
    try {
      const jobRole = await JobRole.findById(req.params.id);

      res.json(jobRole);
    } catch (error) {
      next(error);
    }
  },
  async Index(req, res, next) {
    try {
      const jobRoles = await JobRole.find();

      res.json(jobRoles);
    } catch (error) {
      next(error);
    }
  },
  async Destroy(req, res, next) {
    try {
      const jobRole = await JobRole.findByIdAndDelete(req.params.id);

      res.json(jobRole);
    } catch (error) {
      next(error);
    }
  },
  async Update(req, res, next) {
    try {
      const jobRole = await JobRole.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      res.json(jobRole);
    } catch (error) {
      next(error);
    }
  },
};
