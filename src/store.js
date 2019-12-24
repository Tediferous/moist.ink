import React,{Component} from 'react';
import Card from './card'

class Store extends Component{
  state = {
    title: "THINGS",
    subtitle: "Buy them",
    rows:[
      [
        {name: "Black", text:"$10", soldout: true, source:"https://cdn11.bigcommerce.com/s-iodt3qca/images/stencil/1280x1280/products/505/966/s-l1600__06219.1538706999.jpg?c=2?imbypass=on"},
        {name: "White", text:"$10", source:"https://images-na.ssl-images-amazon.com/images/I/71IlJIxSypL._SL1000_.jpg"},
      ],
      [
        {soldout:true},
        {},
        {},
        {soldout:true},
      ],
      [
        {},
        {soldout:true},
        {},
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
