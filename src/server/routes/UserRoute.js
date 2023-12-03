import UserController from '../controllers/UserController.js';
import express from 'express';

const app = express();

app.get('/getAll', UserController.getAll);
app.get('/getById/:id', UserController.getById);
app.post('/create', UserController.create);
app.put('/edit/:id', UserController.edit);

export default app;