import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import Login from './components/Pages/Login'

// Rendering the Layout component
// to <div id="main"> in index.html
// while passing in the 'title' as a prop
/*
ReactDOM.render(
  <Login />,
  document.getElementById('main')
);

*/

ReactDOM.render(
  <Routes />,
  document.getElementById('main')
);