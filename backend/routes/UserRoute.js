import UserController from '../controllers/UserController.js';
import express from 'express';
// import files from '../helpers/Upload.js';

const app = express();

app.get('/getAll', UserController.getAll);
app.get('/getById/:id', UserController.getById);
app.post('/create', UserController.create);
// app.put('/edit/:id', files.single('files'), UserController.edit);
app.put('/edit/:id', UserController.edit);
app.patch('/patch', UserController.patch);

export default app;