import jsonServer from 'json-server';
import InitController from '../controllers/InitController.js';

const server = jsonServer.create();

server.get('/get', InitController.get);

export default server;