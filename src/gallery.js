import React,{Component} from 'react';
import Card from './card'

class Gallery extends Component{
  state = {
    title: "LOOK",
    subtitle: "here",
    cards:[
      {name: null,canFlip: false, isFlipped: false, poker: false , href: "https://bossip.files.wordpress.com/2014/09/michael-sam.jpg?w=337&h=220&crop=1",
        text:"This is a sentence.", source:"https://www.kepplerspeakers.com/sam-m.jpg"},
      {name:"Idris",canFlip: false, isFlipped: false, poker: false, href: "",
        text:"This is a really fucking long sentence, jesus fucking christ!", source:"https://upload.wikimedia.org/wikipedia/commons/5/53/Idris_Elba-4822.jpg"},
      {name:"Christopher",canFlip: true, isFlipped: true, poker: true,
        text:"New music coming...", source:"https://imgix.bustle.com/uploads/image/2019/11/8/394f4df6-0cdd-4990-b8ef-4d177c63d762-shutterstock_editorial_10229705q.jpg?w=1020&h=576&fit=crop&crop=faces&auto=format&q=70"},
      {name:"Austin",canFlip: false, isFlipped: false, poker: true,
        text:"This is a sentence.", source:"https://imageresizer.static9.net.au/_KBBBePIgJt4Kveui1l5xzEA7C8=/1024x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2Ffd84034c-b9b9-4fa2-9cd7-36a24542b9fd"},
      {name:"Scott",canFlip: false, isFlipped: false, poker: true,
        text: null, source:"https://i.pinimg.com/originals/31/1d/b6/311db6e2482851777e2caf17582e6627.jpg"},
    ]
  }
  render(){
    return(

      <div className="section comics">
        <div className="container"><div className="row"><h2 className="box">{this.state.title}</h2> <h4>{this.state.subtitle}</h4></div></div>
        <div className="hand">
          {
            this.state.cards.map((card)=>{
              return <Card key={card.source} poker={card.poker} isFlipped={card.isFlipped} canFlip={card.canFlip} name={card.name} href={card.href} text={card.text} pic={card.source} />
            })
          }
        </div>
      </div>
      /*<hr/>*/
    );
  }
}
export default Gallery;
