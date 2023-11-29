import jsonServer from 'json-server';
import UserController from '../controllers/UserController.js';

const server = jsonServer.create();

server.get('/getAll', UserController.getAll);
server.get('/getById/:id', UserController.getById);
server.post('/create', UserController.create);
server.put('/edit/:id', UserController.edit);

export default server;