const todosController = require('../controllers');
const express = require('express');
const router = express.Router();

router.get('/', todosController.readTodos);
router.get('/delete/:id', todosController.deleteTodo);
router.post('/add/', todosController.addTodo);
router.put('/update/', todosController.editTodo);
router.put('/complete/', todosController.completeTodo);


module.exports = router;