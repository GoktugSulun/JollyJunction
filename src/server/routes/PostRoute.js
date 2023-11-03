import jsonServer from 'json-server';
import PostController from '../controllers/PostController.js';

const server = jsonServer.create();

server.get('/getAll', PostController.getAll);
server.get('/getById/:id', PostController.getById);
server.get('/get', PostController.get);
server.post('/create', PostController.create);
server.post('/like', PostController.like);

export default server;