import React from 'react'
import { Component } from 'react'
import Sidebar from '../Sidebar'
import Searchbar from '../Searchbar'
import CompanyCard from '../CompanyCard'
import { Link,withRouter } from 'react-router-dom'
class Applied extends Component {
    render(){
        return(    
            <>
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
            </>
        )
    }
}
export default withRouter(Applied);