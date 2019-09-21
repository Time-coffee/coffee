import React, { Component } from 'react'
import { Card,Table,Button,Pagination,Spin,Popconfirm} from 'antd'
import Add from './add'
import './index.less'

class Coffee extends Component {
    constructor(){
        super()
        this.state={
            dataSource:[],
            page:1,
            pageSize:5,
            total:0,
            loding:true,
        }
    };
    columns=[
        {
            title:'名称',
            dataIndex:'name',
            key:'name',
            width:100,
        },
        {
            title:'类型',
            dataIndex:'type',
            key:'type',
            width:100,
        },
        {
            title:'图片',
            dataIndex:'img',
            key:'img',
            width:200,
            render:(data)=>{
                return (<img width='80px' src='bgyuyugyutyu.jpg'/>)
            }
        },
        {
            title:'描述',
            dataIndex:'desc',
            key:'desc',
            width:200,
        },
        {
            title:'价格',
            dataIndex:'price',
            key:'price',
            width:200,
        },
        {
            title:'操作',
            dataIndex:'acion',
            key:'acion',
            width:200,
            render:(txt,record)=>{
                //console.log(a,b)
                return(
                    <div>
                    <Popconfirm
                    title="是否删除"
                    onConfirm={this.detal.bind(this,record._id)}
                    >
                    <Button type="danger" size="large">删除</Button>
                    </Popconfirm>
                    <Button type="primary" size="large">修改</Button>
                    </div>
                )
            }
            
        }
    ];
    detal=(id)=>{
        console.log(id)
        this.$axios({
            method:'post',
            url:'/coffee/coffee/data/delete',
            data:{
                _id:id
            }
        })
        .then((res)=>{
            console.log(res)
            this.initData(this.state.page,this.state.pageSize)
        })
    }
    pageChange=(page,pagesize)=>{
       // console.log('页面改变',page,this.state.pageSize)
        this.initData(page,this.state.pageSize)
        this.setState({page:page})
        //console.log()
    }
    initData=(page,pageSize)=>{
        //console.log(page,pageSize)
        //this.$axios.post(`/hehe/coffee/data/findPage?page=${page}&pageSize=${pageSize}`)
        //.then((data)=>{
        //    console.log(data)
        //    if(data.data.err==0){
        //        console.log(data)
        //        this.setState({dataSource:data.data.list})
        //    }
       // })
       this.setState({loding:true})
       this.$axios({
        method:'post',
        url:"/hehe/coffee/data/findPage",
        data:{
           page:page,
           pageSize:pageSize,
          
        }
      })
      .then((res)=>{
       if(res.data.err==0){
        this.setState({dataSource:res.data.list,total:res.data.total,loding:false})
       }
        //console.log(res)
      })
    }
    componentDidMount(){
        let {page,pageSize}=this.state
        this.initData(page,pageSize)
    }
    render() {
        let {total,pageSize,loding}=this.state
        return (
            <Card className='food-container'>
            <Spin tip="数据加载中"
                spinning={loding}
            >
             <Table
              dataSource={this.state.dataSource}
              className='test'
               columns={this.columns}
               scroll={{y:400,x:1500}}
               pagination={false}
               >
            </Table>
            </Spin>
               <Pagination simple defaultCurrent={1} total={total} pageSize={pageSize} onChange={this.pageChange}/>
               <Add></Add>
            </Card>
        )
    }
}
export default Coffee