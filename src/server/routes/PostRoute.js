import jsonServer from 'json-server';
import PostService from '../services/PostService.js';

const server = jsonServer.create();

server.get('/getAll', PostService.getAll);
server.get('/get/:id', PostService.get);
server.post('/create', PostService.create);

export default server;