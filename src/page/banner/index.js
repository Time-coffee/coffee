import React,{Component} from 'react'
import {Card,Table,Button,Pagination,Spin} from 'antd'
class Cfbanner extends Component{
    constructor(){
        super()
        this.state={
            dataSource:[],
            page:1,
            pageSize:5,
            total:0,
            loading:true,
        }
    }
    columns=[
        // {
        //     title: '名称',
        //     dataIndex: 'name',
        //     key: 'name',
        //   },
        //   {
        //     title: '类型',
        //     dataIndex: 'foodtype',
        //     key: 'foodtype',
        //   },
          {
            title: '图片',
            dataIndex: 'img',
            key: 'img',
            render(data){
                //console.log('图片',data)
                return(<img width='80' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568889186241&di=5d7a7e509b34ef6c52e077caa5d5536d&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fent%2Ftransform%2F20171011%2F2XNF-fymrcpu8728266.jpg'/>)
            }
           
          },
          {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc',
          },
        //   {
        //     title: '价格',
        //     dataIndex: 'price',
        //     key: 'price',
        //   },
          {
              title:'操作',
              dataIndex:'acton',
              key:'action',
              render(a,b){
                  return(
                      <div>
                        <Button type='primary' size='small'>修改</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button type='danger' size='small'>删除</Button>
                      </div>
                  )
                      
                  
              }
          }
    ];
    pageChange=(page,pageSize)=>{
        console.log('页码改变',page,pageSize)
        this.initData(page,this.state.pageSize)
    }
    initData=(page,pageSize)=>{
        this.setState({loading:true})
        this.$axios.post('http://localhost:3000/admin/food/findByTypePage',{
            page:page,pageSize:pageSize,token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cyI6IjEyMyIsInVpZCI6IjEyMyIsImlhdCI6MTU2ODg4NTUxOCwiZXhwIjoxNTY4ODg5MTE4fQ.oiwofPTQkfCY5BN57nxC70uhEQv2tN7MAQ1ekhg8XRM'
        }).then((data)=>{
            if(data.data.err==0){
                this.setState({dataSource:data.data.list,total:data.data.total,loading:false})
            }
            console.log(data)
        })
    }
    componentDidMount(){
        let {page,pageSize}=this.state
        this.initData(page,pageSize)
    }
    render(){
        let {total,pageSize,loading}=this.state
        return(
            <Card className="banner-container">
                <Spin tip='数据加载中'
                    spinning={loading}
                >
                <Table rowKey={record=>record.id} dataSource={this.state.dataSource} 
                columns={this.columns} scroll={{y:415}}
                pagination={false}
                />
                </Spin>
                <Pagination simple defaultCurrent={1} total={total}
                pageSize={pageSize} onChange={this.pageChange}/>
            </Card>
        )
    }
}

export default Cfbanner