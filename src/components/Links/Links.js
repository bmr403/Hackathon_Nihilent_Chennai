import React from 'react'
import {Link} from 'react-router'

/**
 * 
  <nav className="navbar navbar-default">
    <Link 
      activeStyle={{color: 'coral'}} 
      to="/">
      Home
    </Link>
    
    <Link 
      activeStyle={{color: 'coral'}} 
      to={ {pathname: '/customer' } }>
      Customer Info
    </Link>

    <Link class="nav-link"
      activeStyle={{color: 'coral'}} 
      to={ {pathname: '/register', query: {message: 'call me'}} }>
      Register
    </Link>
</nav>
 */

const Links = () =>(
 
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container">
  <a className="navbar-brand" href="#">
  <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""/></a>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">

    <Link className="nav-link"
      activeStyle={{color: 'coral'}} 
      to="/map">
      Customer Locations
    </Link></li>
    
    
   <li className="nav-item">
    <Link className="nav-link"
      activeStyle={{color: 'coral'}} 
      to={ {pathname: '/customer'} }>
      View Customers 
    </Link>
   </li>
   <li className="nav-item">
    <Link className="nav-link"
      activeStyle={{color: 'coral'}} 
      to={ {pathname: '/logout'} }>
      Logout
    </Link>
    </li>
    </ul>
    </div>
  </div>
  </nav>


);
export default Links
