import React,{Component} from 'react';
import logo from './ass/svg/black-logo.svg';

class Jumbo extends Component{
  // Setting Initial State
  state = {
    matrix: `1 0 0 0 0
             0 1 0 0 0
             0 0 1 0 0
             0 0 0 30 -15
             `
  }

  render(){
    return(
      <div className="jumbotron">
        <div className="display">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <svg>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation='10'/>
              <feColorMatrix id="matrix" in="name" mode="matrix" values={this.state.matrix}/>
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
}

//class Drip extends Component{
//  state = {
//    nDrops: 5,
//    nDreps: 0
//  }
//  render(){
//    return(
//      <div>
//        <div className="drip">
//          {
//            Drep(this.state.nDreps)
//          }
//          {
//            Drop(this.state.nDrops)
//          }
//          <div className="wave wave1"/>
//          <div className="wave wave2"/>
//          <div className="wave wave3"/>
//          <div className="wave wave4"/>
//          <div className="border"/>
//          <div className="border"/>
//        </div>
//      </div>
//    );
//  }
//}
//
//const Drep =(n)=>{
//  var i;
//  var divs = []
//  for (i=0; i<n; i++){
//    divs[i] = <div key={i} className="drep"/>
//  }
//  return divs
//}
//
//const Drop =(n)=>{
//  var i;
//  var divs = []
//  for (i=0; i<n; i++){
//    divs[i] = <div key={i} className="drop"/>
//  }
//  return divs
//}

export default Jumbo;
