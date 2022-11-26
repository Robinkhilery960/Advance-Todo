const express=require("express")

const{ createTodo}=require("../controllers/create_todo")
const { deleteTask } = require("../controllers/delete_task")
const { deleteTodo } = require("../controllers/delete_todo")
const { editTask } = require("../controllers/edit_task")
const { editTodo } = require("../controllers/edit_todo")
const { getTodo } = require("../controllers/get_todo")
const { getTodos } = require("../controllers/get_todos")

const router=express.Router()

// to create todo
router.post('/createtodo',createTodo)

// to find a todo
router.get("/gettodo/:todoId",getTodo)

// to find all todos
router.get('/gettodos',getTodos)

//edit a todo
router.put('/edittodo/:todoId',editTodo)

//edit task
router.put('/edittask/:todoId/:index',editTask)

//delete task
router.delete("/deletetask/:todoId/:index",deleteTask)

// delete todo
router.delete("/deletetodo/:todoId",deleteTodo)


module.exports=router