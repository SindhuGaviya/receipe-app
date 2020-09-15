const mongoose=require('mongoose')


const Schema=mongoose.Schema
const receipeSchema=new Schema({
    name:{
        type:String,
        required:true
        
    },
    description:{
        type:String
    },
    ingredients:{
       type:String,
       required:true
    }
})


//model
const Receipe=mongoose.model('Receipe',receipeSchema)

module.exports=Receipe