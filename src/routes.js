const express = require('express');
const requireDir = require('require-dir');

const controllers = requireDir('./controllers');
const middlewares = requireDir('./middlewares');

const routes = express.Router();

// Auth Routes
routes.post('/signin', controllers.Auth.signIn);
routes.post('/signup', controllers.Auth.signUp);

routes.use(middlewares.auth);

// Employee Routes
routes.post('/employee', controllers.Employee.create);
routes.get('/employee/:id', controllers.Employee.show);
routes.get('/employee', controllers.Employee.index);
routes.delete('/employee/:id', controllers.Employee.destroy);
routes.put('/employee/:id', controllers.Employee.update);

// Department Routes
routes.post('/department', controllers.Department.create);
routes.get('/department/:id', controllers.Department.show);
routes.get('/department', controllers.Department.index);
routes.delete('/department/:id', controllers.Department.destroy);
routes.put('/department/:id', controllers.Department.update);

// JobRole Routes
routes.post('/jobRole', controllers.JobRole.create);
routes.get('/jobRole/:id', controllers.JobRole.show);
routes.get('/jobRole', controllers.JobRole.index);
routes.delete('/jobRole/:id', controllers.JobRole.destroy);
routes.put('/jobRole/:id', controllers.JobRole.update);

module.exports = routes;
