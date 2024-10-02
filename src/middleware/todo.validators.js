import { verifyToken } from '../utils/jwt.js';
import Todo from '../models/todo.js';

const validateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    const verification = verifyToken(token);
    if(!verification){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = verification;
    next();
}

const validateNewTodo = (req, res, next) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }
    next();
}