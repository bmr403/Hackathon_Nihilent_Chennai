import React, { Component } from 'react';
import {Link} from 'react-router';
import cookie from 'js-cookie';

export default class Logout extends Component{

    constructor(){
        super();
        cookie.set('active','0');
    }
render(){
    return <div><h1>Session logged out Please Login </h1>
    <Link className="nav-link"
      activeStyle={{color: 'coral'}} 
      to="/">
     Login
    </Link>
    </div>
}
}