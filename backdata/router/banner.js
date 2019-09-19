const express=require('express')
const router=express.Router()
const shopModel=require('../db/model/bannermodel')

//banner修改
/**
 * @api {post} /coffee/banner/updata banner修改
 * @apiName updata
 * @apiGroup /banner
 *
 * @apiParam {String} _id  banner的id
 * @apiParam {String} img  图片路径
 * @apiParam {String} desc 图片描述
 * 
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg 错误信息
 */
router.post('/updata',(req,res)=>{
    let {_id,img,desc}=req.body
    shopModel.updateMany({_id},{img,desc})
    .then((data)=>{
        res.send({err:0,msg:'修改成功'})
    })
})
//banner查询
/**
 * @api {post} /coffee/banner/find banner查询
 * @apiName find
 * @apiGroup /banner
 *
 * @apiParam {String} _id  banner的id
 * @apiParam {String} img  图片路径
 * @apiParam {String} desc 图片描述
 * 
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg 错误信息
 * @apiSuccess {Array} list 查询的数据
 */
router.post('/find',(req,res)=>{
    shopModel.find()
    .then((data)=>{
        res.send({err:0,msg:'查询成功',list:data})
    })
})
module.exports=router