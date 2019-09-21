import React,{Component} from 'react'
import { Table, Divider} from 'antd';
const { Column } = Table;

class Cfshop extends Component{
    constructor(){
        super()
        this.state={
          list:[],
          columns:[]
        }
    }
    componentDidMount=()=>{
      let url='/coffee/coffee/shop/find'
      this.$axios.post(url).then((req,res)=>{
        const columns = [
          {
            title: 'Name',
            dataIndex: 'name',
            width: 200,
          },
          {
            title: 'Img',
            dataIndex: 'img',
            width: 200,
          },
          {
            title: 'Price',
            dataIndex: 'price',
            width: 200,
          },
          {
            title: 'Desc',
            dataIndex: 'desc',
            width: 200,
          },
          {
            title: 'Type',
            dataIndex: 'type',
            width: 200,
          }
        ];
        const data = [];
        let newdata=req.data.list
        for (let i = 0; i < newdata.length; i++) {
          data.push({
            key: newdata[i]._id,
            name: newdata[i].name,
            img:newdata[i].img,
            price:newdata[i].price,
            desc:newdata[i].desc,
            type:newdata[i].type,
          });
        }
        this.setState({list:data,columns:columns})
      })
    }
    delete=(record)=>{
      let url='/coffee/coffee/shop/delete'
      this.$axios.post(url,{_id:record.key}).then((req,res)=>{
        this.componentDidMount()
      })
    }
    modify=(record)=>{
      console.log(record)
    }
    render(){
        return(
            <div>
                <Table dataSource={this.state.list}>
                  {this.state.columns.map((item)=>{
                    return(
                      <Column title={item.title} dataIndex={item.dataIndex} key={item.key}/>
                    )
                  })}
                  <Column
                    title="Action"
                    key="action"
                    render={(record) => {
                      return(
                        <span>
                          <a href="javascript:void(0)" onClick={this.modify.bind(this,record)}>Modify</a>
                          <Divider type="vertical" />
                          <a href="javascript:void(0)" onClick={this.delete.bind(this,record)}>Delete</a>
                        </span>
                      )
                      
                    }}
                  />
                </Table>
            </div>
        )
    }
}

export default Cfshop