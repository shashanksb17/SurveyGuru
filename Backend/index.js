const express=require("express")
require("dotenv").config()
const {connection}=require("./config/db")
const {getRouter}=require("./routes/get.route")
// const {modifyRouter}=require("./routes/modify.route")
const {postRouter}=require("./routes/post.route")

const app=express()
app.use(express.json())

app.use("/surveys",getRouter)
app.use("/surveys",postRouter)
// app.use("/surveys",modifyRouter)

app.listen(process.env.port,async ()=>{
    try{
        await connection 
        console.log("Connected to DataBase")
    }
    catch(err){
        console.log("Can not connect the DataBase")
        console.log(err)
    }
    console.log(`Server is running at port ${process.env.port}`)
})
