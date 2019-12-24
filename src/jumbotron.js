import React,{Component} from 'react';
import logo from './ass/svg/logo.svg';

class Jumbo extends Component{
  // Setting Initial State
  state = {
    matrix: "1 0 0 0 0 \n 0 1 0 0 0 \n 0 0 1 0 0 \n 0 0 0 30 -15"
  }

  render(){
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
              <feGaussianBlur in="SourceGraphic" stdDeviation='10'/>
              <feColorMatrix in="name" mode="matrix" values={this.state.matrix}/>
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
}
class Drip extends Component{
  state = { nDrops: 42 }
  render(){
    return(
      <div>
        <div className="drip">
          {
            Drop(this.state.nDrops)
          }
          <div className="border"/>
          <div className="border"/>
        </div>
      </div>
    );
  }
}

const Drop =(n)=>{
  var i;
  var divs = []
  for (i=0; i<n; i++){
    divs[i] = <div key={i} className="drop"/>
  }
  return divs
}

export default Jumbo;
