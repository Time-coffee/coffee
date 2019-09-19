const mongoose=require('mongoose')

let shopSchema=mongoose.Schema({
    img:{type:String,required:true},
    desc:{type:String,required:true},
})
const shopModel=mongoose.model('banners',shopSchema)
module.exports=shopModel