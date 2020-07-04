import React,{Component} from 'react';
import Card from './card'
import white from './ass/svg/white-card.svg'
import black from './ass/svg/card.svg'
import s1 from './ass/img/s1.jpg'
import s2 from './ass/img/s2.jpg'
import s3 from './ass/img/s3.jpg'
import l1 from './ass/img/l1.jpg'
import l2 from './ass/img/l2.jpg'
import l3 from './ass/img/l3.jpg'
import c1 from './ass/img/c1.jpg'
import c2 from './ass/img/c2.jpg'
import c3 from './ass/img/c3.jpg'
import p1 from './ass/img/p1.jpg'
import p2 from './ass/img/p2.jpg'
import z1 from './ass/img/z1.jpg'

class Store extends Component{
  state = {
    title: "PRODUCTS",
    subtitle: null,
    rows:[
      [
        {name: "Black Deck", text:"$10", soldout: true, source:black},
        {name: "White Deck", text:"$10", soldout: true, source:white},
      ],
      [
        {name: "Sketch: Bust", text:"$14", soldout: true, source: s1},
        {name: "Sketch: Torso", text:"$17", soldout: true, source: s2},
        {name: "Sketch: Body", text:"$20", soldout: true, source: s3},
      ],
      [
        {name: "Line: Bust", text:"$17", soldout: true, source: l1},
        {name: "Line: Torso", text:"$20", soldout: true, source: l2},
        {name: "Line: Body", text:"$23", soldout: true, source: l3},
      ],
      [
        {name: "Color: Bust", text:"$20", soldout: true, source: c1},
        {name: "Color: Torso", text:"$23", soldout: true, source: c2},
        {name: "Color: Body", text:"$26", soldout: true, source: c3},
      ],
      [
        {name: "Paint: Bust", text:"$30", soldout: true, source: p1},
        {name: "Paint: Torso", text:"$35", soldout: true, source: p2},
      ],
      [
        {name: "3D: Bust", text:"$45", soldout: true, source: z1},
      ],
    ]
  }
  render(){
    return(
      <div className="store section">
        <div className="container"><div className="row"><h2 className="box">{this.state.title}</h2> <h4>{this.state.subtitle}</h4></div></div>
        {
          this.state.rows.map((row)=>{
            return <div key={Math.random()} className="hand">
              {
                row.map((item)=>{
                  return <Card key={Math.random()} name={item.name} soldout={item.soldout} text={item.text} pic={item.source}/>
                })
              }
            </div>
          })
        }
      </div>
      /*<hr/>*/
    );
  }
}
export default Store;
