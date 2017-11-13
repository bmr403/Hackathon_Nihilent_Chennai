import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router';
import API from '../../api/API'

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

class Login extends Component {

   constructor() {
    super();
    this.state = {
      data: []
    }
    this.state = {email:"",password:""};
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
 
    const state=this.state;
    state[event.target.name]=event.target.value;
    this.setState(state);
  }

   handleSubmit(event) {
     event.preventDefault();

     const{email,password} = this.state;

    this.setState({email:"",password:""});
    var queryString=`?emailid=${this.state.email}&password=${this.state.password}`;
   
    API.VerifyAdmin(queryString);
  
      this.setState({ 
      email: "",
      password: "" });    
   
  }


  render() {
const{email,password} =this.state;
const msg = getParameterByName('msg');

    return (
         <div>
<div>
{ msg && msg === 'FAILURE'
                ? <p > Username or password incorrect </p>
                : msg && msg === 'INVALID' 
                ? <p >Invalid User.  Please Register </p>
                 :msg==='LOGIN'? <p>Please Login </p>:<p></p>
            }
</div>

     <div id="wrapper">
   <br/>
<br/>
 

<div className="form_div">
<p className="form_label"></p>
<form onSubmit={this.handleSubmit}>
<p><input type="email" placeholder="Enter Email" name ="email" value={email} onChange={this.handleChange} required/></p>
<p><input type="password" placeholder="**********" name = "password" value={password} onChange={this.handleChange} required/></p>
<p><input type="submit" value="LOGIN"/></p>


<div><p>Want to Register ? Please click </p><Link to={'/register'}> SignUp</Link></div>
</form>
</div>



<br/>
<br/>
<br/>
 
</div>

</div>
    );
  }
}


export default Login;



