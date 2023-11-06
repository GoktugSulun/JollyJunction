import jsonServer from 'json-server';
import NotificationController from '../controllers/NotificationController.js';

const server = jsonServer.create();

server.get('/get', NotificationController.get);

export default server;