const express=require("express")
const { createUser } = require("../controllers/user/register")
const { getUser } = require("../controllers/user/login")
const { dashboard } = require("../controllers/user/dashboard")
const { auth } = require("../middlewares/auth");
const { logout } = require("../controllers/user/logout");
 

const userRouter=express.Router()

 
 // create user 
userRouter.post("/createuser",createUser)

// get user /login 
userRouter.post("/getuser",getUser)

// get dashboard
userRouter.get("/dashboard",auth,dashboard)

//logout
userRouter.delete("/logout",logout)

module.exports=userRouter