import React,{Component} from 'react';
import logo from './ass/svg/logo.svg';

const Nav = (props) => {
  if (props.active){
    return(
      <li className="nav-item activeTODO">
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
class Navbar extends Component {
  // Setting Initial State
  state = {
    buttons: [
      {name:"Home",    active: true , path:"/" },
      {name:"Products",active: false, path:"/products" },
      {name:"Comics",   active: false, path:"/comics" },
      {name:"Team",    active: false, path:"/team" },
    ],
    title:"MOIST.INK",
    colorMode: "navbar-dark",
    number: 12,
  }


  toggleActive = () => {
    const newState = this.state.buttons.map((button)=>{
      const tempButton = button;
      tempButton.active = false;//TODO make false unless you are the button
      return tempButton;
    });
    this.setState({
      newState
    });
  }


  render(){
    return(
      <nav className={"navbar navbar-expand-lg "+this.state.colorMode}>

        <a className="navbar-brand" href="/#"><img src={logo} width="30" height="30" alt=""/> {this.state.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {
              this.state.buttons.map((button)=>{
                return <Nav key={button.name}onClick={this.toggleActive} active={button.active} path={button.path}>{button.name}</Nav>
              })
            }
          </ul>
        </div>

      </nav>
    );
  }
}

export default Navbar;
