import React, { Component } from 'react'
import { Card } from 'antd'
import './middle.less'
import ReactEcharts from 'echarts-for-react'

class Middle extends Component {
    constructor() {
        super()
        this.state = {
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
    render() {
        return (
                <Card className="bar">
                    <ReactEcharts option={this.state.option3} style={{ height: "300px"}}></ReactEcharts>
                </Card>
        )
    }
}
export default Middle