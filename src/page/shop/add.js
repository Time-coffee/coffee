import React,{Component} from 'react'
import { Upload, Button, Icon, message} from 'antd';
import './add.less'

class Add extends Component{
    constructor(){
        super()
        this.state={
            list:{name:'',price:'',desc:'',type:'',img:''},
            fileList: [],
        }
    }
    upload=()=>{
        let url='/coffee/coffee/shop/add'
        let {name,price,desc,type,img}=this.state.list
        console.log(name,price,desc,type,img)
        this.$axios.post(url,{name:name,price:price,desc:desc,type:type,img:img}).then((req)=>{
            console.log(req)
        })
    }
    handleUpload = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        formData.append('img', fileList[0]);
        console.log(formData)
        this.state.list.img=formData
    }
    render(){
        let {name,price,desc,type}=this.state.list
        const props = {
            onRemove: file => {
              this.setState({fileList:[]})
            },
            beforeUpload: file => {
                let fileList=this.state.fileList
                fileList.push(file)
                this.setState({fileList:fileList})
            },
          };
        return(
            <div className='shopadd'>
                <div className='shopadd-1'>商品添加</div>
                <div className='shopadd-div'>
                    <span className='shopadd-span'>name</span>
                    <input className='shopadd-input' type='text' value={name} onChange={(e)=>{
                        this.state.list.name=e.target.value
                        this.setState({list:this.state.list})
                    }}></input>
                    <span className='shopadd-span'>price</span>
                    <input className='shopadd-input' type='text' value={price} onChange={(e)=>{
                        this.state.list.price=e.target.value
                        this.setState({list:this.state.list})
                    }}></input>
                    <span className='shopadd-span'>desc</span>
                    <input className='shopadd-input' type='text' value={desc} onChange={(e)=>{
                        this.state.list.desc=e.target.value
                        this.setState({list:this.state.list})
                    }}></input>
                    <span className='shopadd-span'>type</span>
                    <select className='shopadd-select' type='text' value={type} onChange={(e)=>{
                        this.state.list.type=e.target.value
                        this.setState({list:this.state.list})
                    }}>
                        <option>冷饮</option>
                        <option>热饮</option>
                    </select>
                    <span className='shopadd-span'>图片上传</span>
                    <Upload className='shopadd-Upload' {...props}>
                        <Button listType='picture'
                         type="primary"
                         onClick={this.handleUpload}
                        >
                            <Icon type="upload" />Upload
                        </Button>
                    </Upload>
                    <button className='shopadd-button' onClick={this.upload}>提交</button>
                </div>
            </div>
        )
    }
}

export default Add