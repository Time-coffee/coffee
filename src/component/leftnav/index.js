import React,{Component} from 'react'
import { Menu, Icon } from 'antd'

import {withRouter} from 'react-router-dom'
import navData from './navData'
import './index.less'
const {SubMenu}=Menu;
class Leftnav extends Component{
    render(){
        return(
            <Menu style={{width:156}} mode="vertical">
                <Menu.Item> banner管理</Menu.Item>
                <SubMenu>
                <Menu.Item key="9"> banner列表</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}

export default Leftnav