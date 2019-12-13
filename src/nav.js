import React from 'react';
const Nav = (props) => {
  if (props.active){
    return(
      <li className="nav-item active">
        <a className="nav-link" href={props.path}>{props.children}</a>
      </li>
    )
  }else{
    return(
      <li className="nav-item">
        <a className="nav-link" href={props.path}>{props.children}</a>
      </li>
    )
  }
}
export default Nav
///////////EXAMPLES
//import React, {Component} from 'react';
//class Navbar extends Component {
//  render(){
//    return(
//      <div>{this.props.title}</div>
//    )
//  }
//}
//
// import React from 'react';
// const Navbar = (props) => {
//  if (props.children){// stuff inside the divs
//    return (<div>)
//  }else{
//    return (<otherDiv/>)
//  }
// }
