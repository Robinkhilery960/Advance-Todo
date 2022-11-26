 
 
const Todo=require("../model/todo")
exports.deleteTask=async(req,res)=>{
     try {
        //collect data from front end
        const index=req.params.index
        // access to do and then access the array of that todo and then index of task 
        const todo=await Todo.findById(req.params.todoId); 
        // removing task 
        if(todo && todo.tasks.length>0 ){ 
            todo.tasks.splice(index, 1)
            console.log(todo.tasks) 
            await todo.save()
            res.status(201).send("delete success") 
        }else{
            res.status(404).send("todo not found or may be array is empty")
        }
     } catch (error) {
        console.log("erro in deletetask route")
        console.log(error)
     }


}