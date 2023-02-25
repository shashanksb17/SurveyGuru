const express=require("express")

// const {validator}=require("../middlewares/fieldsAnalyzer.middleware")
const {SurveyModel}=require("../model/survey.model")

const postRouter=express.Router()

// postRouter.use(validator)
postRouter.post("/",async(req,res)=>{
    try{
        let survey=new SurveyModel(req.body)
        await survey.save()
        res.send("Food has been added")
    }
    catch(err){
        console.log(err)
        res.send({"msg":`Can not add the survey.`,"error":err.message})
    }
})

module.exports={postRouter}