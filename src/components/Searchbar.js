import React from 'react'
import { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
class Searchbar extends Component {
    render(){
        return(    
            <div className="searchbar">
                <span className="searchbar-icon"><img src="./img/search.png" alt="" /></span>
                <input className="form-group" type="text" placeholder="search for companies"/>
            </div>
        )
    }
}
export default withRouter(Searchbar);