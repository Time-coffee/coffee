const express=require('express')
const router=express.Router()
const shopModel=require('../db/model/shopmodel')

//用户添加
/**
 * @api {post} /coffee/user/add 用户添加
 * @apiName add
 * @apiGroup /user
 *
 * @apiParam {String} _id    user的id
 * 
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg 错误信息
 */
router.post('/add',(req,res)=>{
    let {name}=req.body
    shopModel.insertMany({name})
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
//用户删除
/**
 * @api {post} /coffee/user/delete 用户删除
 * @apiName delete
 * @apiGroup /user
 *
 * @apiParam {String} _id    user的id
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
//用户修改
/**
 * @api {post} /coffee/user/updata 用户修改
 * @apiName updata
 * @apiGroup /user
 *
 * @apiParam {String} _id    user的id
 * @apiParam {String} name   咖啡名字
 * 
 * @apiSuccess {Number} err 错误码
 * @apiSuccess {String} msg 错误信息
 */
router.post('/updata',(req,res)=>{
    let {_id,name}=req.body
    shopModel.updateMany({_id},{name})
    .then((data)=>{
        res.send({err:0,msg:'修改成功'})
    })
})
//用户查询
/**
 * @api {post} /coffee/user/find 用户查询
 * @apiName find
 * @apiGroup /user
 *
 * @apiParam {String} _id    user的id
 * @apiParam {String} name   咖啡名字
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