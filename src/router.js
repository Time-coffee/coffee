import React,{Component} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import App from './App.js'
import Main from 'page/main/index.js'
import Shop from 'page/shop/index.js'
import Banner from 'page/banner/index.js'
import Data from 'page/data/index.js'
import User from 'page/user/index.js'
import BannerAdd from 'page/bannerAdd/index.js'

class Cfrouter extends Component{
    render(){
        return(
            <App>
                <HashRouter>
                    <Switch>
                        <Redirect exact from='/' to='/main'></Redirect>
                        <Route path='/main' render={()=>{
                            return(
                                <Main>
                                    <Route path='/main/shop' component={Shop}></Route>
                                   
                                    <Route path='/main/banner' component={Banner} ></Route>
                                    <Route path='/main/banner/bannerAdd' component={BannerAdd}></Route>
                                    <Route path='/main/data' component={Data}></Route>
                                    <Route path='/main/user' component={User}></Route>
                                </Main>
                            )
                        }}></Route>
                    </Switch>
                </HashRouter>
            </App>
        )
    }
}

export default Cfrouter