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

async function updateTodo (req, res, next) {
    const todoId = req.params.id;
    const { title, description } = req.body;
    const todo = await Todo.findByPk(todoId);
    if (title) {
        todo.title = title;
    }
    if (description) {
        todo.description = description;
    }
    await todo.save();
    res.status(200).json(todo);
}

const getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.findByFk(req.user.email);
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {createTodo};