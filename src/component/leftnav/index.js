import React,{Component} from 'react'

import { Menu, Icon } from 'antd'
import {withRouter} from 'react-router-dom'
import './index.less'
const {SubMenu}=Menu;
class Leftnav extends Component{
    constructor(){
        super()
        this.state={
            list:[{
                name:'商品管理',
                key:'1',
                path:'/main',
                children:[
                    {
                        name:'商品列表',
                        key:'1-1',
                        path:'/main/shop'
                    },
                    {
                        name:'商品增加',
                        key:'1-2',
                        path:'/main/add'
                    }
                ]
                },
                {
                    name:'数据统计',
                    key:'2',
                    path:'/main',
                    children:[
                        {
                            name:'数据列表',
                            key:'2-1',
                            path:'/main/shop'
                        },
                        {
                            name:'查看数据',
                            key:'2-2',
                            path:'/main/adddata'
                        }
                    ]
                    },
                    {
                        name:'用户管理',
                        key:'3',
                        path:'/main',
                        children:[
                            {
                                name:'查看用户',
                                key:'3-1',
                                path:'/main/user'
                            }
                        ]
                        },
                        {
                            name:'banner管理',
                            key:'4',
                            path:'/main',
                            children:[
                                {
                                    name:'查看列表',
                                    key:'4-1',
                                    path:'/main/banner'
                                },
                                {
                                    name:'增加banner',
                                    key:'4-2',
                                    path:'/main/addbanner'
                                }
                            ]
                            },
                ]
        }
    }
    jump=(path)=>{
       this.props.history.push(path)
    }
    initdata=(data)=>{
        return (data.map((item)=>{
                if(item.children){
                    return(
                        <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>{item.name}</span>
                            </span>
                        }
                        >{this.initdata(item.children)}</SubMenu>
                    )
                }else{
                    return(
                        <Menu.ItemGroup>
                            <Menu.Item
                            key={item.key}
                            onClick={this.jump.bind(this,item.path)}
                            >{item.name}</Menu.Item>
                        </Menu.ItemGroup>
                    )
                }
            })
        )
    }
    render(){
        let {list}=this.state
        return(
            <div>
                <div className='leftnav-of'>offee</div>
                <Menu theme='dark'>
                    {this.initdata(list)}
                </Menu>
            </div>
        )
    }
}

export default withRouter(Leftnav)