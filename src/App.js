import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './css/App.scss';
import './css/animation.scss';
import './css/vars.scss';
import Navbar from './navbar'
import About from './about'
import Jumbo from './jumbotron'
import Gallery from './gallery'
import Bio from './bio'
import Store from  './store'
import Foot from './foot'

function App() {
  return (
    <div id="myApp" className="App">
      <Navbar/>
      <Jumbo/>
      <About/>
      <Gallery/>
      <Bio/>
      <Store/>
      <Foot/>
    </div>
  );
}

export default App;
