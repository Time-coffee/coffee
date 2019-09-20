import React,{Component} from 'react'
import {Card,Table,Button,Pagination,Spin,Popconfirm,message} from 'antd'
// import BannerUpdate from '../bannerUpdate'
class Cfbanner extends Component{
    constructor(){
         super()
         this.state={
             dataSource:[],
        //     page:1,
        //     pageSize:5,
        //     total:0,
        //     loading:true,
        //     updateShow:false,
        //     record:{}//要修改的数据
         }
    }
    columns=[
          {
            title: '图片',
            dataIndex: 'img',
            key: 'img',
            render(data){
                //console.log('图片',data)
                return(<img width='80' src={data}/>)
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
                  console.log('好呀好呀',text,record)
                   return(
                       <div>
                           <Button>修改</Button>
                           <Button>删除</Button>
                       </div>
        //               <div>
        //                 <Button type='primary' size='small'
        //                 onClick={this.update.bind(this,record)}
        //                 >修改</Button>
        //                 &nbsp;&nbsp;&nbsp;
        //                 <Popconfirm
        //                 title='你确定删除吗？'
        //                 onConfirm={this.confirmDel.bind(this,record._id)}
        //                 >
        //                 <Button type='danger' size='small'>删除</Button>
        //                 </Popconfirm>
        //               </div>
                   )
                      
                  
              }
           }
    ];
    // update=(record)=>{
    //     console.log('要修改的数据',record)
    //     this.setState({updateShow:!this.state.updateShow,record:record})
    // }
    // confirmDel=(id)=>{
    //     console.log(id)
    //     let {page,pageSize} =this.state
    //     this.$axios.post('http://localhost:3000/admin/food/del',{
    //         _id:id,token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cyI6IjEyMyIsInVpZCI6IjEyMyIsImlhdCI6MTU2ODk3ODgzNCwiZXhwIjoxNTY4OTgyNDM0fQ.ZBvCCJx7XstyDJtFcNlYIszulzK1omTeLIyAqMkUQZY'
    //       }).then((data)=>{
    //         if(data.data.err==0){
    //             message.success('删除ok')
    //           this.initData(page,pageSize)
    //         }else{
    //                  message.error('删除失败请重试')
    //                }
    //       })
    // }
    // pageChange=(page,pageSize)=>{
    //     console.log('页码改变',page,pageSize)
    //     this.setState({page:page})
    //     this.initData(page,this.state.pageSize)
    // }
    initData=()=>{
        //this.setState({loading:true})
       let url='/coffee/coffee/banner/find'
        this.$axios.post(url).then((data)=>{
            console.log('都可以的',data)
            if(data.data.err==0){
                this.setState({dataSource:data.data.list})
            }
        })
    }
    // refresh=()=>{
    //     //列表的刷新方法,1.关掉模态框2.刷新页面
    //     this.setState({updateShow:false})
    //     //请求新的数据刷新页面
    //     this.initData(this.state.page,this.state.pageSize)
    //   }
    componentDidMount(){
       
        this.initData()
    }
    render(){
        // let {total,pageSize,loading,updateShow,record}=this.state
        return(
            <Card className="banner-container">
                {/* <Spin tip='数据加载中'
                    spinning={loading}
                > */}
                {/* {!updateShow||<BannerUpdate record={record}
                refreshfun={this.refresh}
                ></BannerUpdate>} */}
                {/* <Table rowKey={record=>record.id} dataSource={this.state.dataSource} 
                columns={this.columns} scroll={{y:415}}
                pagination={false}
                /> */}

                <Table dataSource={this.state.dataSource} columns={this.columns}/>
                {/* </Spin> */}
                {/* <Pagination simple defaultCurrent={1} total={total} */}
                {/* pageSize={pageSize} onChange={this.pageChange}/> */}
            </Card>
        )
    }
}

export default Cfbanner