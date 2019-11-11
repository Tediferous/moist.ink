import React from 'react';
import logo from './ass/svg/logo.svg';

function Jumbo(){
  return(
    <div class="jumbotron invert">
      <img class="invert" src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://Moist.Ink/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <div class="drip">
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="drop"/>
        <div class="border"/>
        <div class="border"/>
      </div>
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic"
            stdDeviation='10'/>
            <feColorMatrix in="name" mode="matrix"
            values= '1 0 0 0 0
                     0 1 0 0 0
                     0 0 1 0 0
                     0 0 0 30 -15'/>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
export default Jumbo;
