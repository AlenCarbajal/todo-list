import { Router } from "express";
import createTodo from "../controllers/todo.controller";

const router = Router();

router.post("/todos", validateToken, validateNewTodo, createTodo);
router.put("/todos/:id", validateToken, validateUpdateTodo, validateTodoOwner, updateTodo);
router.get("/todos", validateToken, getTodos);

export default router;