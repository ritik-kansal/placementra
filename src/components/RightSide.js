import React from 'react'
import { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
import Calendar from 'react-calendar'
class RightSide extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(    
            <div className="col-3 color0 bg-black right-side pt-16 pb-16 pl-24 pr-24">
                <div className="news mb-60">
                    <span className="fw-600 f-24">
                        News
                    </span>
                    <ul className="">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className="calendar-div text-center">
                    <Calendar onClickDay={this.callDay} showNeighboringMonth={false} />
                </div>
            </div>
        )
    }
}
export default withRouter(RightSide);