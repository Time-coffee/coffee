import React,{Component} from 'react'
import {Card,Table,Button,Pagination,Spin,Popconfirm,message} from 'antd'
import './index.less'
class FoodAdd extends Component{
    constructor(){
        super()
        this.state={desc:'',img:'http://localhost:3000/public/images/1589011474631.jpeg'}
        
    }
    submit=()=>{
        let {desc,img}=this.state
        console.log({desc,img})
        if(img!==''){
            this.$axios.post('/coffee/coffee/banner/add',{
                desc:desc,
                img:img,
            }).then((data)=>{
                console.log(data)
                if(data.data.err==0){
                    message.success('add ok')
                }
            })
        }else{
            message.error('请先上传图片')
        }
      
    }
    upload=()=>{
        let file=this.refs.file.files[0]
        let formdata=new FormData()
        formdata.append('img',file)
        this.$axios.post('/coffee/coffee/upload/upload',formdata)
        .then((data)=>{
          console.log('图片信息',data)
         if(data.data.err===0){
           this.setState({img:data.data.imgpath})
          // console.log('图片',img)
         }else{
             message.err('文件上传失败请重试')
         }
         
        })
       }
    render(){
        let {desc,img}=this.state
        console.log('图片的相对路径',img)
        return(
                <Card title='商品添加'>
                <span>描述</span><input type="text" value={desc} onChange={(e)=>{
                    this.setState({desc:e.target.value})
                }}/><br/><br/>
                 <span>图片</span><input type="file" ref='file'/><br/>
                 <button onClick={this.upload}>上传</button>
                 <br/>
                <img src={`http://10.9.22.207:3001${img}`}  alt="" width='80' height='80'/> 
                <br/> 
                <Button type="primary" onClick={this.submit}>提交</Button>
                </Card>           
        )
    }
}

export default FoodAdd 