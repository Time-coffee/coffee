import React,{Component} from 'react'
import {Card,Table,Button,Spin,Popconfirm,message} from 'antd'
 import BannerUpdate from '../bannerUpdate'
class Cfbanner extends Component{
    constructor(){
         super()
         this.state={
             dataSource:[],
             loading:true,
            updateShow:false,//修改模态框的显示
             record:{}//要修改的数据       
         }
    }
    columns=[
          {
            title: '图片',
            dataIndex: 'img',
            key: 'img',
            render(data){
                //console.log('图片',data)//data是图片的地址字符串
                return(<img width='80' src={`http://10.9.22.207:3001${data}`}/>)
            }
           
          },
          {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc',
          },
          {
               title:'操作',
               dataIndex:'acton',
               key:'action',
              render:(text,record)=>{
                  //console.log('好呀好呀',text,record)
                   return(
                       <div>
                           <Button type='primary' size='small'
                           onClick={this.update.bind(this,record)}
                           >修改</Button>
                           &nbsp;&nbsp;&nbsp;
                           <Popconfirm
                            title='你确定删除吗？'
                            onConfirm={this.confirmDel.bind(this,record._id)}
                         >
                           <Button type='danger' size='small'>删除</Button>
                            </Popconfirm>
                       </div>
                   )
                      
                  
              }
           }
    ];
    update=(record)=>{
        console.log('要修改的数据',record)
        this.setState({updateShow:!this.state.updateShow,record:record})

    }
     confirmDel=(id)=>{
         console.log(id)
         this.$axios.post('/coffee/coffee/banner/delete',{
             _id:id
           }).then((data)=>{
           // console.log(data)
            if(data.data.err==0){
                message.success('删除ok')
                this.initData()
            }else{
                     message.error('删除失败请重试')
                   }
          })
     }
   
    initData=()=>{
        this.setState({loading:true})
       let url='/coffee/coffee/banner/find'
        this.$axios.post(url).then((data)=>{
            console.log('所有数据',data)
            if(data.data.err==0){
                this.setState({dataSource:data.data.list,loading:false})
            }
        })
    }
    refresh=()=>{
        //列表的刷新方法,1.关掉模态框2.刷新页面
        this.setState({updateShow:false})
        //请求新的数据刷新页面
         this.initData()
      }
    componentDidMount(){
       
        this.initData()
    }
    render(){
        let {loading,updateShow,record}=this.state
        return(
            <Card className="banner-container">
                <Spin tip='数据加载中'
                    spinning={loading}                 
                >
                {!updateShow||<BannerUpdate record={record}
                refreshfun={this.refresh}
                ></BannerUpdate>}
                <Table dataSource={this.state.dataSource} columns={this.columns}
                 scroll={{y:415}} pagination={false}/>
                </Spin>
               
            </Card>
        )
    }
}

export default Cfbanner