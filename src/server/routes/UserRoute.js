import jsonServer from 'json-server';
import UserService from '../services/UserService.js';

const server = jsonServer.create();

server.get('/getAll', UserService.getAll);
server.get('/getById/:id', UserService.getById);
server.post('/create', UserService.create);

export default server;