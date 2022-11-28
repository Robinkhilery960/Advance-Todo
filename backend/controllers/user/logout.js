exports.logout=(req,res)=>{
    /* 
    0. clear cookie
    */
   try {
       res.clearCookie("token",{  httpOnly: true }).json({
          success:true,
          message:"cookie is cleared"
       })
    
   } catch (error) {
    console.log("error in logout route")
    console.log(error)
   }
}