import React from 'react'
import { Component } from 'react'
import Sidebar from '../Sidebar'
import Searchbar from '../Searchbar'
import CompanyCard from '../CompanyCard'
import RightSide from '../RightSide'
import { Link,withRouter } from 'react-router-dom'
class Dashboard extends Component {
    render(){
        return(    
            <>
            <div className="row">
                
                <Sidebar/>
                <div className="main-side col-7 offset-2 bg-white">
                    <div className="mt-48">
                        <Searchbar/>
                    </div>
                    <div className="mt-48 position-relative">
                        <div className="f-32 fw-600">
                            Hello David
                        </div>
                        <div className="off-white">
                            Welcome Back!!
                        </div>
                        <div className="filters off-white">
                            <span>Filters</span>
                            <img src="./img/filter.png" alt="" />
                        </div>
                    </div>
                    <div className="mt-48">
                        <div className="card bg-cream">
                            <div className="row">
                                <div className="col-4">
                                    <span className="bg-dark-cream icon">
                                        <img src="./img/applied.png" alt="" />
                                    </span>
                                    <div className="mt-24">
                                        <div className="off-white">
                                            Companies
                                        </div>
                                        <div className="f-36 fw-600">
                                            500
                                        </div>
                                        <div className="off-white">
                                            Applied
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <span className="bg-dark-cream icon">
                                        <img src="./img/on-campus.png" alt="" />
                                    </span>
                                    <div className="mt-24">
                                        <div className="off-white">
                                            Companies
                                        </div>
                                        <div className="f-36 fw-600">
                                            5000
                                        </div>
                                        <div className="off-white">
                                            On-Campus
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <span className="bg-dark-cream icon">
                                        <img src="./img/off-campus.png" alt="" />
                                    </span>
                                    <div className="mt-24">
                                        <div className="off-white">
                                            Companies
                                        </div>
                                        <div className="f-36 fw-600">
                                            500
                                        </div>
                                        <div className="off-white">
                                            Off-Campus
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <CompanyCard background={"bg-orange"}/>
                        </div>
                        <div className="col-6">
                            <CompanyCard background={"bg-green"}/>
                        </div>
                        <div className="col-6">
                            <CompanyCard background={"bg-blue"}/>
                        </div>
                        <div className="col-6">
                            <CompanyCard background={"bg-purple"}/>
                        </div>
                    </div>
                </div>
                <RightSide />
            </div>
            </>
        )
    }
}
export default withRouter(Dashboard);