import React,{Component} from 'react';
import Card from './card'

class Gallery extends Component{
  state = {
    title: "Comics",
    subtitle: "origins",
    cards:[
      {name: null,canFlip: false, isFlipped: false, poker: false , href: "https://comic.moist.ink",
        text:"Issue 0", source:"https://66.media.tumblr.com/b424a87375b65b714c4a29c246988e43/tumblr_owablyWWma1ru8b0jo1_r1_1280.png"},
      {name: null,canFlip: false, isFlipped: false, poker: false , href: "https://comic.moist.ink/post/170506273815",
        text:"Issue 1", source:"https://66.media.tumblr.com/8a5a4fef9ba062a2a8d8e15d3925512f/tumblr_p245xaLdNr1ru8b0jo1_1280.png"},
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
