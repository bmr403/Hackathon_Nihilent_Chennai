import React, { Component } from 'react';
import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import Links from './Links/Links'

// Layout Component
// - collecting sub-components
// - passing down the 'title' prop from App.js
const title = 'Nihilent Customer Location Details';/*
export default (props) =>{
  const currentPath=props.location.pathname;

  
  console.log("location..val.."+props.location.pathname)
var layOutOP=(<div>
  if(currentPath && (currentPath!='login')){
 <Links />
   <Header title={title} > </Header>
   }
   <Content 
     children={props.children} 
     title={title} 
     className="container" 
   />
   <Footer title={title} />
 </div>);

  return(
    layOutOP
  )
}

*/



export default class Layout extends Component{

  constructor(){
super();
this.getHeader=this.getHeader.bind(this);
  }

getHeader(){
  console.log('this.props.location.pathname..'+this.props.location.pathname);
  if(this.props.location.pathname!='/register' && this.props.location.pathname!='/' ){
    return (<div><Links />  <Header title={title} /> </div>);
  }
  return '';
}

render(){
this.getHeader();
var snippet =<div>
  
 {this.getHeader()}
 
   <Content 
     children={this.props.children} 
     title={title} 
     className="container" 
   />
   <Footer title={title} />
 </div>


  return snippet;
}
}