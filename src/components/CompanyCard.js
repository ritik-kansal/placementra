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
            // <div className={"card mt-32 "+this.props.background}>
            //     <div className="row">
            //         <div className="col-8">
            //             <div className="fw-600 f-20">
            //                 Company Name
            //             </div>
            //             <div className="off-white">
            //                 Job type
            //             </div>
            //             <div className="fw-600 f-24 mt-20">
            //                 $100
            //             </div>
            //         </div>
            //         <div className="col-4"></div>
            //     </div>
            // </div>
            <div className="company-card mt-32">
                <div className="top">
                    <img src="./img/logo.jpg" alt="" className="company-logo" />
                </div>
                <div className="company-info">
                    <div className="company-name fw-500 f-24">Lorem, ipsum dolor.</div>
                    <div className="company-attributes mt-8">
                        <div className="fw-300"><img src="./img/applied.png" alt="" /><span>Internship</span></div>
                        <div className="fw-300"><img src="./img/applied.png" alt="" /><span>Software Developer</span></div>
                        <div className="fw-300"><img src="./img/applied.png" alt="" /><span>50,000/month</span></div>
                    </div>
                    <div className="company-desc fw-200 mt-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid excepturi placeat tempora tempore sunt ipsam tenetur veniam quam rerum, beatae suscipit facere aliquam sint voluptatem eligendi libero accusantium obcaecati distinctio?
                    </div>
                    <div className="company-button mt-16 text-center fw-400 f-24">
                        Explore Now
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Sidebar);