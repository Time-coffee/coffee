import React,{Component} from 'react'
import {Card,Button} from 'antd'

class Input extends Component{
    render(){
        return(
            <Card>
                <label>名字:</label><input type="text"/>
                <label>类型:</label><input type="text"/>
                <Button>提交</Button>
            </Card>
        )
    }
}
export default Input