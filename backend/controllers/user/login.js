const User=require("../../model/user")
const bcryptjs=require("bcryptjs")
const {SECRET}=process.env
const jwt=require("jsonwebtoken")

exports.getUser=async(req,res)=>{
      /* 
      0. collect the data from the fromnt end - email, password and user id {token should be ther or not have to think bout that }
      1. check if abouve all are send from the user - if not send res  to send all the require infoemation 
      2. now chack that  user exist with that id or not 
      3. if does not exist send him  response that user does not exist please register first 
      4. if user exist match the password and create token and send it in cookies to web browser 
      */

   try {
     //   0. collect the data from the fromnt end - email, password   {token should be ther or not have to think bout that } 
     const {email,password}=req.body
      console.log(email,password)
 
     // 1. check if abouve all are send from the user - if not send res  to send all the require infoemation 
      
 
     // 2. now chack that  user exist with that id or not 
     const user=await User.findOne({email})
     
     // 3. if does not exist send him  response that user does not exist please register first 
      if(!user){
       return res.send("user not found please register ")
      }
 
     //  4. if user exist match the password and create token and send it in cookies to web browser 
      if(user && await bcryptjs.compare(password,user.password)){
         // now user exist and password are also matched lets create token 
         const token =jwt.sign({userId:user._id},SECRET)
         // dont want to send password to frontend
         user.password=undefined
         // now lets create the cookies and send it to web browswer
         return res.status(201).cookie("token",token,{ expires: new Date(Date.now() + 900000), httpOnly: true }).json({
            success:true,
            user,
            token // for mobile devices
         })
      }else{
         return res.send("password not matched")
      }
   } catch (error) {
    console.log("error in get user route")
    console.log(error)
   }

}