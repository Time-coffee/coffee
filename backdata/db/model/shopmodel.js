const mongoose=require('mongoose')

let shopSchema=mongoose.Schema({
    name:{type:String,required:true},
    img:{type:String,required:true},
    desc:{type:String,required:true},
    price:{type:String,required:true},
    type:{type:String,required:true}
})
const shopModel=mongoose.model('shops',shopSchema)
module.exports=shopModel