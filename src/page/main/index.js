import React,{Component} from 'react'
import './index.less'
import Leftnav from 'component/leftnav/index.js'

class Cfmain extends Component{
    render(){
        return(
            <div className='main'>
                <div className='main-left'>
                    <Leftnav></Leftnav>
                </div>
                <div className='main-right'>
                    <div className='m-r-top'>top</div>
                    <div className='m-r-content'>
                        {this.props.children}
                    </div>
                    <div className='m-r-bottom'>bottom</div>
                </div>
            </div>
        )
    }
}

export default Cfmain