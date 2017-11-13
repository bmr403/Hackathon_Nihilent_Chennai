import React, { Component } from 'react';
import API from '../../api/API';

export default class Customer extends Component{
  

constructor() {
    super();

API.getCookie();

    this.state = {
        firstname: "",
        lastname: "",
        
        lattitude: "",
        longitude: "",
        
        
    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
this.state.actionType='view';   
this.onSiteChanged=this.onSiteChanged.bind(this);

this.state={
  customers:[],
  process:'Loading...',
  addCustomer:''
}
this.getData();
  }

  onSiteChanged(e) {
 
    const state = this.state;
    state.actionType=e.target.value;
    this.getData();
    this.setState(state);
  }

  updateCustomerData(customerObject){
    console.log("editted data..."+JSON.stringify(customerObject))
    
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
    const { firstname, lastname, lattitude,longitude } = this.state;
   // const ADDCUSTOMER='http://192.168.0.21:8080/RESTfulProject/REST/WebService/AddCustomer';
   const ADDCUSTOMER='/RESTfulProject/REST/WebService/AddCustomer';
var queryString=`?firstname=${this.state.firstname}&lastname=${this.state.lastname}&lat=${this.state.lattitude}&lng=${this.state.longitude}`;
console.log("query string...."+queryString);
API.addDataToAPI(ADDCUSTOMER,queryString).then(resData =>{
  this.setState({
    addCustomer:'Successfully added'
  })

}).catch(res=>{
  this.setState({
    addCustomer: 'Failed to add . Try Again later...'
  })
}) 




      this.setState({ firstname: "",
      lastname: "",
      
      lattitude: "",
      longitude: "",
       });
  }
  
  render() {
    const { firstname, lastname, lattitude,longitude } = this.state;


var viewCustomerData=(


   <div> 
<div  style={{ maxWidth: '400px', minHeight: '50px' ,maxHeight: '150px'}}>
<div className='row'>
     <div className='col-lg-6'>   <input type="radio" onChange={this.onSiteChanged}   value="add" name="type" /> New Customer Details
     </div>
     <div className='col-lg-6'>   <input type="radio" onChange={this.onSiteChanged}  defaultChecked value="view" name="type" /> View Customer Details
 </div>
 </div>
</div>
{this.state.actionType==='add'?(
<div class='row'>
<form onSubmit={this.onSubmit}>
<div className="form-group">
    <input required className="form-control" type="text" placeholder='First Name' name="firstname" value={firstname} onChange={this.onChange} />
 </div> 
 <div className="form-group">
   <input required className="form-control" type="text" placeholder='Lastname' name="lastname" value={lastname} onChange={this.onChange} />
   </div>
   <div className="form-group">
    <input required className="form-control" type="text" placeholder='Lattitude' name="lattitude" value={lattitude} onChange={this.onChange} />
   </div>
   <div className="form-group">
    <input required className="form-control" type="text" placeholder='Longitude' name="longitude" value={longitude} onChange={this.onChange} />
    </div>
    <button className="btn btn-primary" type="submit">Submit</button>
    </form>
     <h2 className='text-danger'>{this.state.addCustomer} </h2>  
 </div> 
 
):(
  (this.state.customers.length>0?(
<div className="bd-example">



<table  className="table table-hover">
    <thead>
       <tr>
       <th scope="col">#</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Status</th>
          <th scope="col">Lattitude</th>
          <th scope="col">Longitude</th>
       </tr>
    </thead>
    <tbody>
  
  {this.state.customers.map((item,keyIndex) => { 
       return (
       <tr key={keyIndex}>
       <td scope="row">{keyIndex}</td>
         <td >{item.firstName} {item.lastName}</td>
         <td>Active</td>
         <td>{item.lat}</td>
         <td>{item.lng}</td>
         
       </tr>
       )
    })}
    </tbody>
  </table>
  </div>):(
    <h2 className='text-danger'> {this.state.process}  </h2>
  )
  )
  
  )
}
  </div>
 
  );

    return (
  viewCustomerData
 );
  }

  getData(){
    API.getCustomers().then(custData =>{
      this.setState({
        customers: custData.data
      })
    
    }).catch(res=>{
      this.setState({
        process: 'Failed to get the Response . Try Again later...'
      })
    }) 
   }
 

}