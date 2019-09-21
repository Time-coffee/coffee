const express = require('express')
const multer =require('multer')
const fs=require('fs')
const path=require('path')
const router = express.Router()

router.post('/upload',multer().single('img'),(req,res)=>{
 let {buffer,mimetype}=req.file
 let filename=(new Date()).getTime() + parseInt(Math.random()*999999)+parseInt(Math.random()*456765786578)
 let extname=mimetype.split('/')[1]
 // 类型判断 【gif,png,jpg,jpeg,svg】
 // 大小限制

 let dir=path.join(__dirname,'../www/images')
 
let resPath=`/public/images/${filename}.${extname}`
 fs.writeFile(`${dir}/${filename}.${extname}`,buffer,(err)=>{
    console.log(err)
    if(err){
      res.send({err:-1,msg:'上传失败哦'})
    }else{
      res.send({err:0,msg:'ok',imgpath:resPath})
    }
  })
})



module.exports =  router