import jsonServer from 'json-server';
import CommentController from '../controllers/CommentController.js';

const server = jsonServer.create();

server.get('/getAll', CommentController.getAll);
server.get('/getById/:id', CommentController.getById);
server.get('/get', CommentController.get);
server.post('/create', CommentController.create);

export default server;