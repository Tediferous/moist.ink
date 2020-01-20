import React,{Component} from 'react';

class About extends Component{
  state = {
    title: "About",
    subtitle: "Moist Inkorporated",
    story: `
Here at Moist Inkorporated were are committed to delivering the highest quality ink and ink products straight to you. No matter if its wet or dry, our products are guaranteed to interface with your cartridge seamlessly. Our latest models will bring out your strongest hue to put your brilliance on display. Contact any of our team members to see just how easy it is to get Moist Ink in your hands.
    `,
  }
  render(){
    return(
      <div className="section about">
        <div className="container"><div className="row"><h2 className="box">{this.state.title}</h2> <h4>{this.state.subtitle}</h4></div></div>
        <p>{this.state.story}</p>
      </div>
      /*<hr/>*/
    );
  }
}

export default About;
