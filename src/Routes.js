import React, { Component } from 'react'
import {Router, Route, browserHistory, hashHistory} from 'react-router'

import Layout from './components/Layout'
import MapContainer from './components/Pages/Home'
import Signup from './components/Pages/Signup'

import Customer from './components/customer/customer'
import Login from './components/Pages/Login'
import Logout from './components/Pages/Logout'


export default class App extends Component {
  render() {
    /*hhhhhhhhh*/
    return (
      <Router history={hashHistory}>
        <Route component={Layout}>
          <Route path="/map" component={MapContainer} />
          <Route path="/customer" component={Customer} />
          <Route path="/" component={Login} />
          <Route path="/register" component={Signup} />
          <Route path="/logout" component={Logout} />
        </Route>
      </Router>
    )
  }
}


