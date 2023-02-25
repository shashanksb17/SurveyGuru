const { url } = require("inspector")
const mongoose=require("mongoose")

const SurveySchema=mongoose.Schema({
    userId: {type:Number},
    title: {type:String,required:true},
    category: {type:String,required:true},
    image:  {
        type: Buffer,
        contentType: String
    }
},{
    versionKey:false
})
const SurveyModel=mongoose.model("survey",SurveySchema)

module.exports={SurveyModel}