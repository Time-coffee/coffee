import React, { Component } from 'react'
import { Card,Input,Button,message} from 'antd'
import qs from 'qs'
import './add.less'

class Add extends Component {
    constructor(){
        super()
        this.state={name:'',desc:'',img:'',price:'',type:'热饮'}
    }
    picture=()=>{
        
    }
    submit=()=>{
        let {name,desc,img,price,type}=this.state
        console.log({name,desc,img,price,type})
        let query=qs.stringify({name,desc,img,price,type}) 
        console.log(query)
        this.$axios.get('/hehe/coffee/data/add?'+query)
        // this.$axios({
        //     method:'post',
        //     url:'/coffee/coffee/data/add',
        //     data:{
        //         name:name,
        //         img:img,
        //         desc:desc,
        //         price:price,
        //         type:type,
        //     }
        // })
        .then((data)=>{
            console.log(data)
            if(data.data.err==0){ 
                
                message.success('添加ok')
            }
        })
    }
    render() {
        let {name,type,img,desc,price}=this.state
        return (
            <Card>
            <lable>名称:</lable><Input type="text" className="adse" value={name} onChange={(e)=>{
                this.setState({name:e.target.value})}}/>
            <lable>类型:</lable>
            <select value={type} onChange={(e)=>{
                this.setState({type:e.target.value})}}>
                <option>热饮</option>
                <option>冷饮</option>
                </select>
            <lable>图片:</lable><Input type="file" ref="file" className="adse" value={img} onChange={(e)=>{
                this.setState({img:e.target.value})}}/>
                <Button size="small " type="primary" onClick={this.picture}>上传</Button>
                <br/>
            <lable>描述:</lable><Input type="text" className="adse" value={desc} onChange={(e)=>{
                this.setState({desc:e.target.value})}}/>
            <lable>价格:</lable><Input type="text" className="adse" value={price} onChange={(e)=>{
                this.setState({price:e.target.value})}}/>
            &nbsp;
            <Button size="large" type="primary" onClick={this.submit}>添加</Button>
            </Card>
        )
    }
}
export default Add