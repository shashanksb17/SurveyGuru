const express=require("express")
const {SurveyModel}=require("../model/survey.model")


const getRouter=express.Router()

getRouter.get("/",async(req,res)=>{

    try{
        let foods=await SurveyModel.find()
        res.send(foods)
    }
    catch(err){
        console.log(err)
        res.send({"msg":"Can not get the survey","error":err.message})
    }
    
})

module.exports={getRouter}