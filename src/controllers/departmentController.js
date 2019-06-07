const mongoose = require("mongoose");
const Department = mongoose.model("Department");

module.exports = {
  async create(req, res, next) {
    try {
      const department = await Department.create(req.body);
      res.json(department);
    } catch (error) {
      next(error);
    }
  },
  async search(req, res, next) {
    try {
      const department = await Department.findOne({ id: req.params.id });
      res.json(department);
    } catch (error) {
      next(error);
    }
  },
  async allSearch(req, res, next) {
    try {
      const department = await Department.find();
      res.json(department);
    } catch (error) {
      next(error);
    }
  },
  async destroy(req, res, next) {
    try {
      await Department.findOneAndDelete({ id: req.params.id });
      res.send();
    } catch (error) {
      next(error);
    }
  },
  async addPosition(req, res, next) {
    try {
      const department = await Department.findOne({
        id: req.params.id
      });
      department.position.push(req.body.name);
      await department.save();
      res.json(department);
    } catch (error) {
      next(error);
    }
  },
  async addPhilosophical(req, res, next) {
    try {
      const department = await Department.findOne({
        id: req.params.department
      });
      department.position[req.params.position].philosophical.push(
        req.body.ability
      );
      await department.save();
      res.json(department);
    } catch (error) {
      next(error);
    }
  },
  async addTechnical(req, res, next) {
    try {
      const department = await Department.findOne({
        id: req.params.department
      });
      department.position[req.params.position].technical.push(req.body.ability);
      await department.save();
      res.json(department);
    } catch (error) {
      next(error);
    }
  }
};
