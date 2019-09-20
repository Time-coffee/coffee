import React, { Component } from 'react'

import { Menu, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import './index.less'
const { SubMenu } = Menu;
class Leftnav extends Component {
    constructor() {
        super()
        this.state = {
            list: [{
                name: '商品管理',
                list: ['查看列表', '增加商品'],
                key: 1,
                path: '/main/shop'
            },
            {
                name: '数据统计',
                list: ['数据列表'],
                key: 2,
                path: ['/main/data']
            },
            {
                name: '用户管理',
                list: ['查看用户'],
                key: 3,
                path: '/main/user'
            },
            {
                name: 'banner管理',
                list: ['查看列表'],
                key: 4,
                path: '/main/banner'
            },
            ]
        }
    }
    jump = (path) => {
        this.props.history.push(path)
    }
    render() {
        let { list } = this.state
        return (
            <div>
                <div className='leftnav-of'>offee</div>
                {list.map((item) => {
                    return (
                        <Menu theme='dark'>
                            <SubMenu
                                title={
                                    <span>
                                        <Icon type="mail" />
                                        <span>{item.name}</span>
                                    </span>
                                }
                            >
                                <Menu.ItemGroup key={item.key}>
                                    {item.list.map((data,index) => {
                                        return (
                                            <Menu.Item onClick={this.jump.bind(this, item.path[index])}>{data}</Menu.Item>
                                        )
                                    })}
                                </Menu.ItemGroup>
                            </SubMenu>
                        </Menu>
                    )
                })}
            </div>

        )
    }
}

export default withRouter(Leftnav)