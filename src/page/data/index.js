
import React, { Component } from 'react'
import { Card } from 'antd'
import Top from '../../bar/topbar'
import Middle from '../../bar/middle'
import Input from '../../bar/input'

class Coffee extends Component {
    render() {
        return (
            <Card>
                <Top></Top>
                <Middle></Middle>
                <Input></Input>
            </Card>
        )
    }
}
export default Coffee