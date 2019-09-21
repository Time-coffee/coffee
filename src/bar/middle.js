import React, { Component } from 'react'
import { Card } from 'antd'
import './middle.less'
import ReactEcharts from 'echarts-for-react'

class Middle extends Component {
    constructor() {
        super()
        this.state = {
            zhou:[],
            option3: {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    top: '10%',
                    left: '5%',
                    right: '5%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu','hhf'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 20, 30, 40,50]
                    }
                ]
            }, 
        }
    }
    initData=()=>{
        this.$axios({
            method:'post',
            url:"/coffee/coffee/data/find",
          })
          .then((data)=>{
             let dec= data.data.list
             let ser=[]
             let sa=""
             dec.map((item,index)=>{
                ser.push(item.name)
             })
             for(var i=0;i<ser.length;i++){
                if(this.state.zhou.indexOf(ser[i])==-1){
                     sa=this.state.zhou.push(ser[i])
                }
             }
             console.log( this.state.zhou)
             console.log(this.state.option3.xAxis[0].data)
          })

    }
    componentDidMount(){
        this.initData()
    }
       
    uode=()=>{
        let options=JSON.parse(JSON.stringify(this.state.option3))
       
        let newData=this.state.zhou
        options.xAxis[0].data=newData
        this.setState({option3:options})
       console.log()
    }
    render() {
        return (
                <Card className="bar">
                    <ReactEcharts option={this.state.option3} style={{ height: "300px"}}></ReactEcharts>
                    <button onClick={this.uode}>点击</button>
                </Card>
               
        ) 
    }
}
export default Middle