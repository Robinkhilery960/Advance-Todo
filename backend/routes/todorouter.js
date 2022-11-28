const express=require("express")

const{ createTodo}=require("../controllers/create_todo")
const { deleteTask } = require("../controllers/delete_task")
const { deleteTodo } = require("../controllers/delete_todo")
const { editTask } = require("../controllers/edit_task")
const { editTodo } = require("../controllers/edit_todo")
const { getTodo } = require("../controllers/get_todo")
const { getTodos } = require("../controllers/get_todos")
const { auth } = require("../middlewares/auth")

const todoRouter=express.Router()

// to create todo
todoRouter.post('/createtodo',auth,createTodo)

// to find a todo
todoRouter.get("/gettodo/:todoId",getTodo)

// to find all todos
todoRouter.get('/gettodos',auth,getTodos)

//edit a todo
todoRouter.put('/edittodo/:todoId',editTodo)

//edit task
todoRouter.put('/edittask/:todoId/:index',editTask)

//delete task
todoRouter.delete("/deletetask/:todoId/:index",deleteTask)

// delete todo
todoRouter.delete("/deletetodo/:todoId",deleteTodo)


module.exports=todoRouter