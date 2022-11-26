 
 
const Todo=require("../model/todo")
exports.editTask=async(req,res)=>{
     try {
        //collect data from front end
        const index=req.params.index
        const {text}=req.body
        // access to do and then access the array of that todo and then index of task 
        const todo=await Todo.findById(req.params.todoId);
        todo.tasks[index]=text
        await todo.save()
        res.status(201).send("edit succeed")
     } catch (error) {
        console.log("erro in get-todo  route")
        console.log(error)
     }


}