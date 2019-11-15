import React from 'react';
import logo from './ass/svg/logo.svg';
import Drip from './drip'

function Jumbo(){
  return(
    <div className="jumbotron invert">
      <div className="back">
      </div>
      <div className="front">
        <Drip/>
        <img src={logo} className="App-logo" alt="logo" />
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
