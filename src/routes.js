const express = require("express");
const requireDir = require("require-dir");
const controller = requireDir("./controllers");
const authMiddleware = require("./middlewares/auth");

const routes = express.Router();

// * Auth Routes *//
routes.post("/signup", controller.authController.signup);
routes.post("/signin", controller.authController.signin);

routes.use(authMiddleware);

// * Employee Routes *//
routes.get("/employee/:id", controller.employeeController.search);
routes.get(
  "/employee/allemployees/:department",
  controller.employeeController.allSearch
);
routes.post("/employee", controller.employeeController.create);
routes.delete("/employee/destroy/:id", controller.employeeController.destroy);
routes.post(
  "/employee/philosophical/:id",
  controller.employeeController.addGradePhilosophical
);
routes.post(
  "/employee/technical/:id",
  controller.employeeController.addGradeTechnical
);
// * Department Routes *//
routes.post("/department", controller.departmentController.create);
routes.post(
  "/department/position/:id",
  controller.departmentController.addPosition
);
routes.post(
  "/department/philosophical/:department/:position",
  controller.departmentController.addPhilosophical
);
routes.post(
  "/department/technical/:department/:position",
  controller.departmentController.addTechnical
);
routes.get("/department/:id", controller.departmentController.search);
routes.get(
  "/department/alldepartments/:company",
  controller.departmentController.allSearch
);
routes.delete(
  "/department/destroy/:id",
  controller.departmentController.destroy
);

module.exports = routes;
