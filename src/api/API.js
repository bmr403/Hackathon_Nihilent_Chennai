var axios = require('axios');
var cookieObject=require('js-cookie');
//const DOMAIN='http://192.168.0.21:8080';
const DOMAIN='http://192.168.0.6:8080';
const ADDCUSTOMER=DOMAIN+'/RESTfulProject/REST/WebService/AddCustomer';
const AddAdmin_API = DOMAIN+'/RESTfulProject/REST/WebService/AddAdmin';
const LOCAL_API = DOMAIN+'/RESTfulProject/REST/WebService/GetCustomers';
const VerifyAdmin_API = DOMAIN+'/RESTfulProject/REST/WebService/VerifyAdmin';

const API = {
  
  
  addDataToAPI:(url,queryString)=>(
    axios.get(DOMAIN+url+queryString)
    .then(data =>  data)
    .catch(data =>{console.log("Error when getting the data..")})
  ),


  getCustomers: () => (
    axios.get(LOCAL_API)
      .then(data => data)
      .catch(data =>{})
  ),

  AddAdmin:(queryString)=>(
    axios.get(AddAdmin_API+queryString)
    .then(res=>{
      console.log("Response obj"+JSON.stringify(res.data.result))
      let mailresponse =res.data.result
      if (mailresponse==="SUCCESS"){
      alert("Resgistration Successfull !..Confirmation mail has been sent to your registered email");
      window.location.href='/';
      }else if (mailresponse==="EMAILID_EXIST")
      {
        alert("Entered Email ID is already registered. Please Login if you already registered") 
      }
      else (mailresponse==="FAILURE")
      console.log("Error in User Registration !!!!! ")
    })
    .then(data =>  data)
    .catch(data =>{console.log("Error when getting the email data..")})
  ),

  VerifyAdmin:(queryString)=>(
    axios.get(VerifyAdmin_API+queryString).then(function(response){
      var ass=JSON.stringify(response);
      var res= response.data.result;
  if(res === "SUCCESS") {
    cookieObject.set('active','1');
    window.location.href= "#/map";
  } else {
  window.location.href= "/?msg="+res;
    }
    }

    )    
    .catch(data =>{console.log("Error when getting the data..")})
   
  ),
  getCookie(){
    var userSession= cookieObject.get('active');
    (userSession==='0')? window.location.href= "/?msg=LOGIN":'';
    
  }
 
};
export default API
