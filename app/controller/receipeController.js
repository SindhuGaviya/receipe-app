const Receipe=require('../models/receipe')

module.exports.list=(req,res)=>{
    Receipe.find()
    .then((receipe)=>{
        res.json(receipe)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    // Note.findById(id).populate('category')//category is field name//static method
    Receipe.findOne({_id:id})
    .then((receipe)=>{
       if(receipe){
           res.json(receipe)
       }else{
           res.json({})
       }
    })
    .catch((err)=>{
        res.json(err)
    })
  }

  module.exports.create=(req,res)=>{
    const body=req.body
    const receipe=new Receipe(body)
    receipe.save()//instance method
    .then((receipe)=>{
        res.json(receipe)
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Receipe.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((receipe)=>{
        res.json(receipe)
    })
    .catch((err)=>{
        res.json(err)
    })
 }

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Receipe.findByIdAndDelete(id)
    .then((receipe)=>{
        if(receipe){
       res.json(receipe)
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
  }


