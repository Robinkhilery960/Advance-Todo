 

const Todo=require("../model/todo")
exports.createTodo=async(req,res)=>{
     try {
        // colllect the data send ferom front end 
     // name - a string and tasks an array  
     const {name,tasks}=req.body
     console.log("name",name)
     // validat data 
     if(!name){
        return res.status(401).res("Please enter Heading")
     }
     // create a to-do 
     const todo=await Todo.create({
        name,
        tasks
     })
     res.status(201).send("to-do created succssfully")
     } catch (error) {
        console.log("erro in home route")
        console.log(error)
     }


}