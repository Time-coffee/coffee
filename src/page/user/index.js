import React,{Component} from 'react'
import {Card,Table}from 'antd'
import './index.less' 
class Cfuser extends Component{
    constructor(){
        super()
        this.state={
            dataSource:[{
                key: '1',
                name: '点点',
                vip: '铂金',
                integral: '20',
                width: 150,
              },
              {
                key: '2',
                name: '点点',
                vip: '铂金',
                integral: '20',
                width: 150,
              },]
        }
    }
     columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'VIP',
          dataIndex: 'vip',
          key: 'vip',
        },
        {
          title: '积分',
          dataIndex: 'integral',
          key: 'integral',
        },
      ];
    // componentDidMount(){
    //     this.initData()
    // }
    render(){
        return(
            <Card className='user-container'>
                <Table dataSource={this.state.dataSource} columns={this.columns} />;
            </Card>
        )
    }
}

export default Cfuser
