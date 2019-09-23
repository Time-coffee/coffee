import React,{Component} from 'react'
import {Card,Button} from 'antd'
import './write.less'

class Write extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state=props.record
    }
    submit=()=>{
       let {_id,name,price,desc,img,type}=this.state
       this.$axios.post({_id,name,price,desc,img,type})
      .then((ref)=>{
      console.log(ref)
      this.props.refreshfun()
        })
    }
    upload=()=>{
        console.log(this)
             let img=this.refs.img.refs
             console.log(img)
             let formdata=new FormData()
             formdata.append('img',img)
             this.$axios.post('/coffee/coffee/upload/upload',formdata)
             .then((data)=>{
                console.log(data)
                 if(data.err===0){
                     this.setState({img:data.img})
                 }
             })
         }
    render(){
        let routPath='http://localhost:8080'
        console.log(this,'更新组件')
        let {name,price,desc,img,type}=this.state 
        console.log(this,)
        return(
            <div className="updataModel">
                <Card className="card">
                <label>名称:</label><input type="text" value={name} onChange={(e)=>{
                             this.setState=({name:e.target.value})
                         }}/><br/>
                <label>价格:</label><input type="text" value={price} onChange={(e)=>{
                             this.setState=({name:e.target.value})
                         }}/><br/>
                <label>描述:</label><input type="text" value={desc} onChange={(e)=>{
                             this.setState=({desc:e.target.value})
                         }}/><br/>
                        <select value={type} onChange={(e)=>{
                             this.setState=({type:e.target.value})
                        }}>
                       <option value="热饮">热饮</option>
                        <option >冷饮</option>
                        </select>
                        <hr/>
                       <img src={`http://10.9.22.207:3001`+img} width="80" height="80" alt=""/>
                       <input type="file" ref='img'/>
                        <button onClick={this.upload}>上传</button>
                         <button onClick={this.submit}>修改</button>
                </Card>
            </div>
        )
    }
}
export default Write
// class Write extends Component{
//     constructor(){
//         super()
//          console.log(this.state.form)
//         // this.state.form=this.props.record
//     }
//     // submit=()=>{
//     //     let {_id,name,price,desc,img,type}=this.state
//     //     this.$axios.post({_id,name,price,desc,img,type})
//     //     .then((ref)=>{
//     //         console.log(ref)
//     //         this.props.refreshfun()
//     //     })
//     // }
//     // upload=()=>{
//     //     let img=this.refs.img.files[0]
//     //     console.log(img)
//     //     let formdata=new FormData()
//     //     formdata.append('img',img)
//     //     this.$axios.post('/coffee/coffee/upload/upload',formdata)
//     //     .then((data)=>{
//     //         console.log(data)
//     //         if(data.err===0){
//     //             this.setState({img:data.img})
//     //         }
//     //     })
//     // }
//     render(){
//         // let routPath='http://localhost:8080'
//         // console.log(this,'更新组件')
//          //let {name,price,desc,img,type}=this.state 
//         return(
//             <div className="updataModel">
//                 <Card className="card">
//                 //     <input type="text" value={name} onChange={(e)=>{
//                 //         this.setState=({name:e.target.value})
//                 //     }}/>
//                 //     <input type="text" value={price} onChange={(e)=>{
//                 //         this.setState=({name:e.target.value})
//                 //     }}/>
//                 //     <input type="text" value={desc} onChange={(e)=>{
//                 //         this.setState=({desc:e.target.value})
//                 //     }}/>
//                 //    <select value={type} onChange={(e)=>{
//                 //         this.setState=({type:e.target.value})
//                 //    }}>
//                 //    <option value="热饮">热饮</option>
//                 //    <option >冷饮</option>
//                 //    </select>
//                 //    <hr/>
//                 //    <img src={img} alt=""/>
//                 //    <input type="file" ref='file'/>
//                 //    <button onClick={this.upload}>上传</button>
//                 //     <button onClick={this.submit}>修改</button>
//                 </Card>
//             </div>
//         )
//     }
// }
// export default Write