import { Todo } from '../models/todo.js';

async function createTodo (req, res, next) {
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

async function getTodos (req, res, next) {
    try {
        const offset = parseInt(req.query.page * req.query.limit) || 0;
        const todos = await Todo.findAll({
            where: { userEmail: req.user.email },
            limit: req.query.limit,
            offset: offset
        });
        res.status(200).json(
            {
                data: todos,
                page: req.query.page,
                limit: req.query.limit,
                total: todos.length
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteTodo (req, res, next) {
    const todoId = req.params.id;
    const todo = await Todo.findByPk(todoId);
    await todo.destroy();
    res.status(204).end();
}

export { createTodo, updateTodo, getTodos, deleteTodo };