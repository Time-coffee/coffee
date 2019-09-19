const express=require('express')
const router=express.Router()
const shopModel=require('../db/model/shopmodel')

//商品添加
/**
 * @api {post} /coffee/shop/add 商品添加
 * @apiName add
 * @apiGroup /shop
 *
 * @apiParam {String} _id    shop的id
 * @apiParam {String} name   咖啡名字
 * @apiParam {String} price  咖啡的价格
 * @apiParam {String} type   咖啡的种类
 * @apiParam {String} img    咖啡图片路径
 * @apiParam {String} desc   咖啡描述
 * 
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg 错误信息
 */
router.post('/add',(req,res)=>{
    let {name,img,desc,price,type}=req.body
    shopModel.insertMany({name,img,desc,price,type})
    .then((data)=>{
        if(data.length>0){
            res.send({err:0,msg:'添加成功'})
        }else{
            res.send({err:-1,msg:'添加失败'})
        }
    })
    .catch(()=>{
        res.send({err:-880,msg:'内部错误请重试'})
    })
})
//商品删除
/**
 * @api {post} /coffee/shop/delete 商品删除
 * @apiName delete
 * @apiGroup /shop
 *
 * @apiParam {String} _id    shop的id
 * 
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg 错误信息
 */
router.post('/delete',(req,res)=>{
    let {_id}=req.body
    shopModel.deleteMany({_id})
    .then((data)=>{
        res.send({err:0,msg:'删除成功'})
    })
})
//商品修改
/**
 * @api {post} /coffee/shop/updata 商品修改
 * @apiName updata
 * @apiGroup /shop
 *
 * @apiParam {String} _id    shop的id
 * @apiParam {String} name   咖啡名字
 * @apiParam {String} price  咖啡的价格
 * @apiParam {String} type   咖啡的种类
 * @apiParam {String} img    咖啡图片路径
 * @apiParam {String} desc   咖啡描述
 * 
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg 错误信息
 */
router.post('/updata',(req,res)=>{
    let {_id,name,img,desc,price,type}=req.body
    shopModel.updateMany({_id},{name,img,desc,price,type})
    .then((data)=>{
        res.send({err:0,msg:'修改成功'})
    })
})
//商品查询
/**
 * @api {post} /coffee/shop/find 商品查询
 * @apiName find
 * @apiGroup /shop
 *
 * @apiParam {String} _id    shop的id
 * @apiParam {String} name   咖啡名字
 * @apiParam {String} price  咖啡的价格
 * @apiParam {String} type   咖啡的种类
 * @apiParam {String} img    咖啡图片路径
 * @apiParam {String} desc   咖啡描述
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