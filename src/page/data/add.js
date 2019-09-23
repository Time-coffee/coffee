import React, { Component } from 'react'
import { Card,Input,Button,message} from 'antd'
import qs from 'qs'
import './add.less'

class Add extends Component {
    constructor(){
        super()
        this.state={name:'',desc:'',img:'123.jpg',price:'',type:'热饮'}
    }
    picture=()=>{
        let file=this.refs.file.files[0]
        
        let formData=new FormData()
        
        formData.append('img',file)
        console.log(formData)
        this.$axios.post('/coffee/coffee/upload/upload',formData)
        .then((res)=>{
            console.log(res)
            if(res.data.err==0){
                this.setState({img:res.data.imgpath})
            }else{
                console.log('上传失败')
            }
        })
    }
    
    submit=()=>{
        let {name,desc,img,price,type}=this.state
        console.log({name,desc,img,price,type})
        
        if(img!==""){
            let query=qs.stringify({name,desc,img,price,type}) 
            console.log(query)
            this.$axios.get('/hehe/coffee/data/add?'+query)
            .then((data)=>{
                console.log(data)
                if(data.data.err==0){ 
                    message.success('添加ok')
                }
            })
        }else{
            message.error('请先上传图片')
        }
       
    }
    render() {
        let {name,type,img,desc,price}=this.state
        return (
            <Card>
            <lable>名称:</lable><Input type="text" className="adse" value={name} onChange={(e)=>{
                this.setState({name:e.target.value})}}/><br/>
            <lable>类型:</lable>
            <select value={type} onChange={(e)=>{
                this.setState({type:e.target.value})}}>
                <option>热饮</option>
                <option>冷饮</option>
                </select><br/>
            <lable>描述:</lable><Input type="text" className="adse" value={desc} onChange={(e)=>{
                this.setState({desc:e.target.value})}}/><br/>
            <lable>价格:</lable><Input type="text" className="adse" value={price} onChange={(e)=>{
                this.setState({price:e.target.value})}}/><br/>
                <lable>图片:</lable><Input type="file" ref='file'/>
                <button onClick={this.picture}>上传</button><br/>
                <img src={`http://10.9.22.207:3001${img}`}  alt="" width='80' height='80'/>
                <hr/>
            <Button size="large" type="primary" onClick={this.submit}>添加</Button>
            </Card>
        )
    }
}

export default Add