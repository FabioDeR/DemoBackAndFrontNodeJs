import { Router } from 'express';
import { AuthController } from '../controllers/api/v1/AuthController';
import { TodoController } from '../controllers/api/v1/TodoController';
import {catchErrors} from '../middlewares/Errors';
import { TodoValidator } from '../validators/TodoValidator';

const apiTodosRouter = Router();

//DEFINE my Routes for todos
apiTodosRouter.get('/api/v1/todos', AuthController.authorize, TodoController.findAll);
apiTodosRouter.get('/api/v1/todos/:id', catchErrors(TodoController.findById));
apiTodosRouter.post('/api/v1/todos', TodoValidator.getRules(), TodoValidator.validate, catchErrors(TodoController.create));
apiTodosRouter.put('/api/v1/todos/:id', TodoValidator.getRules(), TodoValidator.validate, catchErrors(TodoController.update));
apiTodosRouter.delete('/api/v1/todos/:id', catchErrors(TodoController.delete));


export {apiTodosRouter};