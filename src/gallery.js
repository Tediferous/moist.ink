import React,{Component} from 'react';
import Card from './card'

class Gallery extends Component{
  state = {
    title: "LOOK",
    subtitle: "here",
    cards:[
      {name: null,canFlip: false, isFlipped: false, poker: false , href: "https://bossip.files.wordpress.com/2014/09/michael-sam.jpg?w=337&h=220&crop=1",
        text:"This is a sentence.", source:"https://www.kepplerspeakers.com/sam-m.jpg"},
      {name:"Christopher",canFlip: false, isFlipped: true, poker: false,
        text:"New music coming...", source:"https://imgix.bustle.com/uploads/image/2019/11/8/394f4df6-0cdd-4990-b8ef-4d177c63d762-shutterstock_editorial_10229705q.jpg?w=1020&h=576&fit=crop&crop=faces&auto=format&q=70"},
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
