import Navigo from 'navigo';

import { LoginController } from './controllers/Login';
import { RegisterController } from './controllers/Register';
import { TodoContoller } from './controllers/TodosController';

const appRouter = new Navigo('/');
appRouter.on('/', new LoginController().execute());
appRouter.on('/register', new RegisterController().execute());
appRouter.on('/todos', new TodoContoller().execute());
appRouter.resolve();
export {appRouter};