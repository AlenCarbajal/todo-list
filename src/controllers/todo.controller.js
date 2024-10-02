import { Todo } from '../models/todo.js';

const createTodo = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const todo = await Todo.create({ title, description });
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.findAll();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {createTodo};