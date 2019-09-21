import React,{Component} from 'react'
import {Card,Table,Button,Pagination,Spin,Popconfirm,message} from 'antd'
import './index.less'
class FoodAdd extends Component{
    constructor(){
        super()
        this.state={desc:'',img:''}
        
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
        var r = new FileReader();  //本地预览
        r.onload = ()=>{
           console.log(r.result);//图片的base64
           this.setState({img:r.result})  
        }
        r.readAsDataURL(file);//本地预览对象进行读取 
       }
    render(){
   let {desc,img}=this.state
        return(
                <Card title='商品添加'>
                <span>描述</span><input type="text" value={desc} onChange={(e)=>{
                    this.setState({desc:e.target.value})
                }}/><br/><br/>
                 <span>图片</span><input type="file" ref='file'/><br/>
                 <button onClick={this.upload}>上传</button>
                 <br/>
                <img src={img} alt="" width='80' height='80'/> 
                <br/> 
                <Button type="primary" onClick={this.submit}>提交</Button>
                </Card>           
        )
    }
}

export default FoodAdd 