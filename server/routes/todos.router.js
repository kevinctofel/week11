const todosController = require('../controllers/todos.controller');
const express = require('express');
const router = express.Router();

// localhost:8080/api/
router.get('/todos/', todosController.readTodos);
router.post('/todos/add/', todosController.addTodo, todosController.readTodos);
router.put('/todos/complete/', todosController.completeTodo, todosController.readTodos);
router.put('/todos/update/', todosController.editTodo, todosController.readTodos);
router.delete('/todos/delete/', todosController.deleteTodo, todosController.readTodos);

module.exports = router;