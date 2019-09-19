
import React, { Component } from 'react'
import { Card } from 'antd'
import Top from '../../bar/topbar'
import Middle from '../../bar/middle'
import "./index.less"

class Coffee extends Component {
    render() {
        return (
            <Card>
                <Top></Top>
                <Middle></Middle>
            </Card>
        )
    }
}
export default Coffee