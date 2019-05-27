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
routes.get("/allemployees", controller.employeeController.allSearch);
routes.post("/employee", controller.employeeController.create);
routes.delete("/employee/destroy/:id", controller.employeeController.destroy);

// * Departament Routes *//
routes.post("/department", controller.departmentController.create);
// routes.post(
//   "/department/philosophical/:id",
//   controller.departmentController.create
// );
// routes.post(
//   "/department/technical/:id",
//   controller.departmentController.create
// );
routes.get("/department/:id", controller.departmentController.search);
routes.get("/alldepartments", controller.departmentController.allSearch);
routes.delete(
  "/department/destroy/:id",
  controller.departmentController.destroy
);

module.exports = routes;
