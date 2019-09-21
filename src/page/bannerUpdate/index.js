 import React,{Component} from 'react'
 import {Card,Table,Button,Pagination,Spin,Popconfirm,message} from 'antd'
 import './index.less'
 class FoodUpdate extends Component{
    constructor(props){
        super(props)
        this.state=props.record
    }
     submit=()=>{
        let {_id,desc,img}=this.state
        this.$axios.post('/coffee/coffee/banner/updata',{_id,desc,img})
        .then((data)=>{
          console.log('修改完的信息',data)
           this.props.refreshfun()
         })
     }
     upload=()=>{
         let img=this.refs.img.files[0]
         //console.log('图片的信息',img)
         let formdata=new FormData()
         formdata.append('img',img)
         // console.log('图片获取',formdata)
         this.$axios.post('/coffee/coffee/upload/upload',formdata)
         .then((data)=>{
           //console.log('图片信息',data)
          if(data.data.err===0){
            this.setState({img:data.data.imgpath})
           // console.log('图片',img)
          }
          
         })
       }
     render(){
         //let rootpath='http://localhost:3000'
       console.log("更新组件",this)
        let {desc,img}=this.state
         return(
            <div className='updateModel'>
                <Card className='card'>
                <img src={`http://10.9.22.207:3001${img}`}  alt="" width='80' height='80'/> 
                 <input type="file" ref='img'/><br/>
                 <button onClick={this.upload}>上传</button>

                <span>描述:</span> <input type="text" value={desc} onChange={(e)=>{
                    this.setState({desc:e.target.value})
                }
                }/><br/>
                <button onClick={this.submit}>修改</button>
                </Card>
            </div>
         )
     }
 }

 export default FoodUpdate