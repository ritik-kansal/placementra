import React, { Component } from 'react';
// import logo from './logo.svg'; 
import './App.css';
import './css/main.css';
import { Switch, Route, withRouter } from "react-router-dom";
import Cookies from 'universal-cookie';
import axios from 'axios'
import Dashboard from './components/pages/Dashboard';
import Applied from './components/pages/Applied';
import OnCampus from './components/pages/OnCampus';
import OffCampus from './components/pages/OffCampus';
class App extends Component {
  render(){
    return (
      // wrapped in router in index.js 
      <Switch>
          <Route exact path="/dashboard">
              <Dashboard/>
          </Route>
          <Route exact path="/applied">
              <Applied/>
          </Route>
          <Route exact path="/on-campus">
              <OnCampus/>
          </Route>
          <Route exact path="/off-campus">
              <OffCampus/>
          </Route>
          
      </Switch>
  );
  }
}

export default withRouter(App);
