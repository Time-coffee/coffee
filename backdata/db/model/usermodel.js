const mongoose=require('mongoose')

let shopSchema=mongoose.Schema({
    name:{type:String,required:true},
})
const shopModel=mongoose.model('users',shopSchema)
module.exports=shopModel