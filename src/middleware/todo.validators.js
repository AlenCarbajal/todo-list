import { verifyToken } from '../utils/jwt.js';
import Todo from '../models/todo.js';

async function validateToken(req, res, next) {
    const token = req.headers['authorization'];
    const verification = verifyToken(token);
    if(!verification){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = verification;
    next();
}

async function validateNewTodo(req, res, next) {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Forbidden' });
    }
    next();
}

async function validateUpdateTodo(req, res, next) {
    const { title, description } = req.body;

    if (!title && !description) {
        return res.status(403).json({ message: "Forbidden" });
    }
    next();
}

async function validateTodoOwner(req, res, next) {
    const todoId = req.params.id;
    const userEmail = req.user.email;
    const todo = await Todo.findByPk(todoId);
    if (!todo || todo.userEmail !== userEmail) {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
}

export { validateToken, validateNewTodo, validateUpdateTodo };