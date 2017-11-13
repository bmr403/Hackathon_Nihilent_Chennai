import React from 'react'

const Content = props =>{

  var style= {
    overflow: 'auto',
    margin: '90px 10px 10px 10px' ,
    height :'450px'   

  };


  return(
    <div className="jumbotron" style={style}>
      {props.children}
    </div>
  )
};
export default Content