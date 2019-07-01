const mongoose = require('mongoose');
const Department = mongoose.model('Department');

module.exports = {
  async create(req, res, next) {
    try {
      const department = await Department.create(req.body);

      res.json(department);
    } catch (error) {
      next(error);
    }
  },
  async show(req, res, next) {
    try {
      const department = await Department.findById(req.params.id);

      res.json(department);
    } catch (error) {
      next(error);
    }
  },
  async index(req, res, next) {
    try {
      const departments = await Department.find();

      res.json(departments);
    } catch (error) {
      next(error);
    }
  },
  async destroy(req, res, next) {
    try {
      const department = await Department.findByIdAndDelete(req.params.id);

      res.json(department);
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const department = await Department.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      await department.save();

      res.json(department);
    } catch (error) {
      next(error);
    }
  },
};
