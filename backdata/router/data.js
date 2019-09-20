const express=require('express')
const router=express.Router()
const shopModel=require('../db/model/datamodel')

//商品添加
/**
 * @api {post} /coffee/data/add 商品添加
 * @apiName add
 * @apiGroup /data
 *
 * @apiParam {String} _id    data的id
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
 * @api {post} /coffee/data/delete 商品删除
 * @apiName delete
 * @apiGroup /data
 *
 * @apiParam {String} _id    data的id
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
 * @api {post} /coffee/data/updata 商品修改
 * @apiName updata
 * @apiGroup /data
 *
 * @apiParam {String} _id    data的id
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
 * @api {post} /coffee/data/find 商品查询
 * @apiName find
 * @apiGroup /data
 *
 * @apiParam {String} _id    data的id
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
    let total = 0
    shopModel.find({name:'拿铁',type:'热饮'})//查找数据库的用户名密码
    .then((data)=>{//返回的查找的结果
        total = data.length
        console.log(total)
        res.send({err:0,msg:"查找成功",list:data,total:total})
       
    })
    .catch((err)=>{
        res.send({err:err,msg:"内部错误，请重新填写"})
    })
})

module.exports=router