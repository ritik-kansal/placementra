import React from 'react'
import { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(    
            <div className={"card mt-32 "+this.props.background}>
                <div className="row">
                    <div className="col-8">
                        <div className="fw-600 f-20">
                            Company Name
                        </div>
                        <div className="off-white">
                            Job type
                        </div>
                        <div className="fw-600 f-24 mt-20">
                            $100
                        </div>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        )
    }
}
export default withRouter(Sidebar);