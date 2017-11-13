import React, { Component } from 'react'
import API from '../../api/API'


export default class Signup extends Component{

constructor() {
    super();
    this.state = {
        fname: "",
        lname: "",
        email: "",
        password:""        

    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onChange  (e)  {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit (e)  {
    e.preventDefault();
    // get our form data out of state
    const { fname, lname, email,password } = this.state; 
 //   const AddAdmin_API = 'http://192.168.0.21:8080/RESTfulProject/REST/WebService/AddAdmin';
 const AddAdmin_API = '/RESTfulProject/REST/WebService/AddAdmin';
var queryString=`?firstname=${this.state.fname}&lastname=${this.state.lname}&emailid=${this.state.email}&password=${this.state.password}`;
API.AddAdmin(queryString);
      this.setState({ fname: "",
      lname: "",
      email: "",
      password: "" });
      
  }

  render() {
    const { fname, lname, email,password } = this.state;
    return (
      <div id="wrapper">
      <div className="form_div">
      <p className="form_label">Admin Registration</p>

      <form onSubmit={this.onSubmit} >
    
       
                <input type="text" required placeholder='FirstName' name="fname" ref="fname" value={fname} onChange={this.onChange} /><br/><br/>
        <input type="text" required placeholder='LastName' name="lname" value={lname} ref="lname" onChange={this.onChange} /><br/><br/>
        <input type="email" required placeholder='Email' name="email" value={email} onChange={this.onChange} /><br/><br/>
       <input type="password" required placeholder='Password' name="password" value={password} onChange={this.onChange} /><br/><br/>        

       <p><input type="submit" value="REGISTER"/></p>
      </form>
      </div>
      </div>
    );
  }
}


