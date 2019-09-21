import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'


class Top extends Component {
    constructor() {
        super()
        this.state = {
            zhou:[],
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                grid: {
                    top: '4%',
                    left: '10%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: []
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}'
                    },
                    axisPointer: {
                        snap: true
                    }
                },
                series: [
                    {
                        name: '订单数',
                        type: 'line',
                        smooth: true,
                        data: [10, 20, 30, 40, 50, 60],

                    }
                ]
            },
            option1: {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    top: '4%',
                    left: '10%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                        data: [10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            },
            option2: {
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    top: '4%',
                    left: '10%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                        data: [10, 52, 200, 334, 390, 330, 220]
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
              console.log(data)
             let dec= data.data.list
             let ser=[]
             dec.map((item,index)=>{
                ser.push(item.name)
             })
             for(var i=0;i<ser.length;i++){
                if(this.state.zhou.indexOf(ser[i])==-1){
                     this.state.zhou.push(ser[i])
                }
             }
             console.log( this.state.zhou)
          })

    }
    componentDidMount(){
        this.initData()
    }
       
    uode=()=>{
        let options=JSON.parse(JSON.stringify(this.state.option))
        let newData=this.state.zhou
        options.xAxis.data=newData
        this.setState({option:options})
        console.log(this.state.option.xAxis.data)
    }

    render() {
        
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box">
                            <h2>总销售量</h2>
                            <h3>总订单</h3>
                            <p>
                                <ReactEcharts option={this.state.option} style={{ width: "400px", height: "100px" }} ></ReactEcharts>
                            </p>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box">
                            <h2>热饮</h2>
                            <h3>杯数</h3>
                            <p>
                                <ReactEcharts option={this.state.option1} style={{ width: "400px", height: "100px" }}></ReactEcharts>
                            </p>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box">
                            <h2>冷饮</h2>
                            <h3>杯数</h3>
                            <p>
                                <ReactEcharts option={this.state.option2} style={{ width: "400px", height: "100px" }}></ReactEcharts>
                            </p>
                        </div>
                    </Col>
                </Row>
                <button onClick={this.uode}>点击</button>
            </div>
        )
    }
}
export default Top