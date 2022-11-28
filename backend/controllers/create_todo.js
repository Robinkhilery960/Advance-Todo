const Todo=require("../model/todo")  
 const User=require("../model/user")

exports.createTodo=async(req,res)=>{
     try {
        // colllect the data send ferom front end 
     // name - a string and tasks an array  
     const {name,tasks}=req.body 
     const {userId}=req.user
     console.log( req.user,"userId")
     // validat data 
     if(!name){
        return res.status(401).res("Please enter Heading")
     }
     // create a to-do 
     const todo=await Todo.create({
        name,
        tasks,
        userId
     })

     // after creating todo lets now find user and update its review field  
     res.status(201).json({
      success:true,
      message:"todo is created ",
       todo
     })
     } catch (error) {
        console.log("erro in create todo route")
        console.log(error)
     }


}