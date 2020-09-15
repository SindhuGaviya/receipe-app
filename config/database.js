const mongoose=require('mongoose')

const setupDB=()=>{
    //db configuration
mongoose.connect('mongodb://localhost:27017/receipe-app')
.then(()=>{
    console.log('success')
})
.catch(()=>{
    console.log('err')
})
}

module.exports=setupDB