const listoftodos = require("../STORE");
const todosController = {};

todosController.readTodos = (req, res, next) => {
    res.status(200).send(listoftodos);
}

todosController.addTodo = (req, res, next) => {
   const {id, text, isCompleted} = req.body;
   listoftodos.push({id, text, isCompleted});
   res.status(200).send(listoftodos);
}

todosController.completeTodo = (req, res, next) => {
   const {id} = req.body;
   const index = listoftodos.findIndex((todo) => todo.id === id);
   listoftodos[index].isCompleted = !listoftodos[index].isCompleted;
   res.status(200).send(listoftodos);
}

todosController.editTodo = (req, res, next) => {
   const {id, text} = req.body;
   const index = listoftodos.findIndex((todo) => todo.id === id);
   listoftodos[index].text = text;
   res.status(200).send(listoftodos);
}

todosController.deleteTodo = (req, res, next) => {
   const deleteID = req.params.id;
   listoftodos.splice(listoftodos.findIndex((todo) => todo.id === deleteID), 1);
   res.status(200).send(listoftodos);
}

module.exports = todosController;