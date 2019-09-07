import React from 'react';
import logo from './ass/svg/logo.svg';
import './css/App.css';
import Navbar from './navbar'
import Jumbo from './jumbotron'

function App() {
  //header();
  //return header();
  return (
    <div className="App">
      <Navbar/>
      <Jumbo/>
    </div>
  );
}

export default App;
