const User=require("../../model/user")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const {SECRET}=process.env



exports.createUser=async(req,res)=>{
   /* 
   0. collect all the data from the front end
   1. check all the require data is there or not if not send resonse that data is required
   2. if data is complete - chcek wether user exist already or not -if exist then send response user already exist 
   3. id user  does not exist  then hash the passwords of the user 
   4. the  create the user in data base 
   5. create a token  
   */

    try {
        const {firstname,lastname,email,password}=req.body
    
        // if any of above data is missing send this response 
        if(!(firstname && lastname && email && password)){
          return res.status(401).send("Please provide required information")
        }
        
        // checking user already exist or not 
        const user= await User.findOne({email})
        // if user exist then send response back 
        if(user){
         return res.send("Email Id is already in use")
        }
     
        // hasing your pasword
        const hashPassword= await bcryptjs.hash(password,10)
        
        // create user in the databse 
        const newUser= await User.create({
         firstname,
         lastname,
         email,
         password:hashPassword
        })

        // create a token 
        const token= await jwt.sign({userId:newUser._id},SECRET)
        
        //  add this token to user new created user
        newUser.token=token
     
        // font wantr to send password to the front end 
        newUser.password=undefined
     
        // lets send this new user to front end
        return res.status(201).json({
         success:true,
         newUser,
         token, 
        })
    } catch (error) {
        console.log("error in create user route")
        console.log(error)
    }
}