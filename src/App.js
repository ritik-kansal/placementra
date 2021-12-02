import React, { Component } from 'react';
// import logo from './logo.svg'; 
import './App.css';
import './css/main.css';
import { Switch, Route, withRouter } from "react-router-dom";
import Cookies from 'universal-cookie';
import axios from 'axios'
import Dashboard from './components/pages/Dashboard';
class App extends Component {
  render(){
    return (
      // wrapped in router in index.js 
      <Switch>
          <Route exact path="/dashboard">
              <Dashboard/>
          </Route>
          
          
      </Switch>
  );
  }
}

export default withRouter(App);
