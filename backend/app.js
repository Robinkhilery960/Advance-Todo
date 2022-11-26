require("dotenv").config()
require("./config/databse").connect()
 
const router=require("./routes/todorouter")
 const express=require("express")

 const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',router)

 module.exports=app