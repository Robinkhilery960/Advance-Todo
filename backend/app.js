require("dotenv").config()
require("./config/databse").connect()
 
const express=require("express")
const todoRouter=require("./routes/todorouter") 
const userRouter=require("./routes/userrouter")
const cookie_parser=require("cookie-parser")

 const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookie_parser())
app.use("/",[todoRouter,userRouter])

 module.exports=app