import React from 'react';
import logo from './ass/svg/logo.svg';
import Drip from './drip'

function Jumbo(){
  return(
    <div class="jumbotron invert">
      <div class="back">
      </div>
      <div class="front">
        <h1>MOIST.INK</h1>
        <Drip/>
        <img class="invert" src={logo} className="App-logo" alt="logo" />
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
