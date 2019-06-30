const express = require('express');
const requireDir = require('require-dir');

const controllers = requireDir('./controllers');
const middlewares = requireDir('./middlewares');

const routes = express.Router();

// Auth Routes
routes.post('/signin', controllers.Auth.SignIn);
routes.post('/signup', controllers.Auth.SignUp);

routes.use(middlewares.auth);

// Employee Routes
routes.post('/employee', controllers.Employee.Create);
routes.get('/employee/:id', controllers.Employee.Show);
routes.get('/employee', controllers.Employee.Index);
routes.delete('/employee/:id', controllers.Employee.Destroy);
routes.put('/employee/:id', controllers.Employee.Update);

// Department Routes
routes.post('/department', controllers.Department.Create);
routes.get('/department/:id', controllers.Department.Show);
routes.get('/department', controllers.Department.Index);
routes.delete('/department/:id', controllers.Department.Destroy);
routes.put('/department/:id', controllers.Department.Update);

// JobRole Routes
routes.post('/jobRole', controllers.JobRole.Create);
routes.get('/jobRole/:id', controllers.JobRole.Show);
routes.get('/jobRole', controllers.JobRole.Index);
routes.delete('/jobRole/:id', controllers.JobRole.Destroy);
routes.put('/jobRole/:id', controllers.JobRole.Update);

module.exports = routes;
