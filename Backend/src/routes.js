import {Router }  from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddlewares from './app/middlewares/auth';
const routes = new Router();

routes.post('/users',UserController.store);
routes.post('/sessions',SessionController.store);

routes.get('/users',UserController.listAll);

routes.use(authMiddlewares);

routes.put('/users',UserController.update);



export default  routes
