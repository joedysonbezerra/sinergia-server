const mongoose = require('mongoose');
const Department = mongoose.model('Department');

module.exports = {
  async Create(req, res, next) {
    try {
      const department = await Department.create(req.body);

      res.json(department);
    } catch (error) {
      next(error);
    }
  },
  async Show(req, res, next) {
    try {
      const department = await Department.findById(req.params.id);

      res.json(department);
    } catch (error) {
      next(error);
    }
  },
  async Index(req, res, next) {
    try {
      const departments = await Department.find();

      res.json(departments);
    } catch (error) {
      next(error);
    }
  },
  async Destroy(req, res, next) {
    try {
      const department = await Department.findByIdAndDelete(req.params.id);

      res.json(department);
    } catch (error) {
      next(error);
    }
  },
  async Update(req, res, next) {
    try {
      const department = await Department.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      res.json(department);
    } catch (error) {
      next(error);
    }
  },
};
