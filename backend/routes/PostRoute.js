import PostController from '../controllers/PostController.js';
import express from 'express';
// import files from '../helpers/Upload.js';

const app = express();

app.get('/getAll', PostController.getAll);
app.get('/getById/:id', PostController.getById);
app.get('/get', PostController.get);
app.delete('/delete/:id', PostController.delete);
// app.post('/create', files.array('files'), PostController.create);
app.post('/create', PostController.create);
app.post('/like', PostController.like);
app.post('/save', PostController.save);

export default app;