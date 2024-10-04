import { Router } from "express";
import createTodo from "../controllers/todo.controller";

const router = Router();

// Apply validateToken middleware to all routes
router.use(validateToken);

router.get("/", getTodos);
router.post("/", validateNewTodo, createTodo);
router.delete("/:id", validateTodoOwner, deleteTodo);
router.put("/:id", validateTodoOwner, validateUpdateTodo, updateTodo);

export default router;