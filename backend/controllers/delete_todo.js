 
 
const Todo=require("../model/todo")
exports.deleteTodo=async(req,res)=>{
     try { 
        const todo=await Todo.findByIdAndDelete(req.params.todoId);  
        if(todo){
            return res.status(201).send("delete is successful")
        }else{
            return res.status(404).send("Not found") 
        }
     } catch (error) {
        console.log("erro in get-todo  route")
        console.log(error)
     }


}