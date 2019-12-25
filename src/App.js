import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
    <Router>
      <Switch>
        <Route path="/comic">
          <Gallery/>
        </Route>
        <Route path="/products">
          <Store/>
        </Route>
        <Route path="/team">
          <Bio/>
        </Route>
        <Route path="/">
          <Jumbo/>
          <About/>
        </Route>
      </Switch>
    </Router>
        <Foot/>
      </div>
  );
}

export default App;
