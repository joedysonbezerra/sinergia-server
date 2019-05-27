const mongoose = require("mongoose");
const Employee = mongoose.model("Employee");

module.exports = {
  async create(req, res, next) {
    try {
      const employee = await Employee.create(req.body);
      res.json(employee);
    } catch (error) {
      next(error);
    }
  },
  async search(req, res, next) {
    try {
      const employee = await Employee.findOne({ id: req.params.id });
      res.json(employee);
    } catch (error) {
      next(error);
    }
  },
  async allSearch(req, res, next) {
    try {
      const employee = await Employee.find().sort();
      res.json(employee);
    } catch (error) {
      next(error);
    }
  },
  async destroy(req, res, next) {
    try {
      await Employee.findOneAndDelete({ id: req.params.id });
      res.send();
    } catch (error) {
      next(error);
    }
  }
};
