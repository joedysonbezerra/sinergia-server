const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

module.exports = {
  async Create(req, res, next) {
    try {
      const employee = await Employee.create(req.body);

      res.json(employee);
    } catch (error) {
      next(error);
    }
  },
  async Show(req, res, next) {
    try {
      const employee = await Employee.findOne({ id: req.params.id });

      res.json(employee);
    } catch (error) {
      next(error);
    }
  },
  async Index(req, res, next) {
    try {
      const employees = await Employee.find();

      res.json(employees);
    } catch (error) {
      next(error);
    }
  },
  async Destroy(req, res, next) {
    try {
      const employee = await Employee.deleteOne({ id: req.params.id });

      res.json(employee);
    } catch (error) {
      next(error);
    }
  },
  async Update(req, res, next) {
    try {
      const employee = await Employee.updateOne(
        { id: req.params.id },
        { $set: req.body }
      );

      res.json(employee);
    } catch (error) {
      next(error);
    }
  },
};
