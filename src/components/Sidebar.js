import React from 'react'
import { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
class Sidebar extends Component {
    render(){
        return(    
            <div className="col-3 min-vh-100 aside bg-white position-fixed">
                <div class="aside-img mt-20 text-center">
                    <Link className="" to="/">
                        <img class="d-lg-inline d-none" src="./img/logo.jpg" alt=" " style={{width: "80%"}}/>
                    </Link>
                </div>
                <div className="aside-nav">
                    <ul className="w-100">
                        <li className="active"><span><img src="./img/home.png" style={{width:"24px"}} alt="" />Home</span></li>
                        <li><span><img src="./img/applied.png" style={{width:"24px"}} alt="" />Applied</span></li>
                        <li><span><img src="./img/on-campus.png" style={{width:"24px"}} alt="" />On-Campus</span></li>
                        <li><span><img src="./img/off-campus.png" style={{width:"24px"}} alt="" />Off-Campus</span></li>
                        <li><span><img src="./img/news.png" style={{width:"24px"}} alt="" />News</span></li>
                        <li><span><img src="./img/calendar.png" style={{width:"24px"}} alt="" />Calendar</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(Sidebar);