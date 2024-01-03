import CommentController from '../controllers/CommentController.js';
import express from 'express';

const app = express();

app.get('/getAll', CommentController.getAll);
app.get('/getById/:id', CommentController.getById);
app.get('/get', CommentController.get);
app.post('/create', CommentController.create);
app.post('/like', CommentController.like);
app.put('/edit', CommentController.edit);
app.delete('/delete/:id', CommentController.delete);

export default app;