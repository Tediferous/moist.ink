import React,{Component} from 'react';
import Card from './card'
import white from './ass/svg/white-card.svg'
import black from './ass/svg/card.svg'

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
        {name: "Sketch: Bust", text:"$14", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e35/74698404_148043049792254_744848500227197718_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=iXwYBVlTjYYAX9eLSbB&oh=a69dce0abb69e2ab3ecd60d8290086e6&oe=5EBBF861"},
        {name: "Sketch: Torso", text:"$17", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e35/13259668_568701556621859_823926736_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=sMeaRdxQN_YAX-K-tb5&se=7&oh=18c0dfe51e038bdb3df84cf3ab91fdf4&oe=5EA1E688"},
        {name: "Sketch: Body", text:"$20", soldout: true, source:"https://instagram.fatl1-2.fna.fbcdn.net/v/t51.2885-15/e35/13703197_629253393905275_1636892146_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=sEzMj6jKPboAX9fpNie&se=7&oh=9d93f358b00ac5ed414208c33a3d4de6&oe=5EB8906C"},
      ],
      [
        {name: "Line: Bust", text:"$17", soldout: true, source:"https://instagram.fatl1-2.fna.fbcdn.net/v/t51.2885-15/e35/14504780_312690539109529_3427436807615152128_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=GOj_Fg2Cx7QAX_zJhIn&se=7&oh=16f6bb141222cf860b71587728cab5d1&oe=5EB5AC0C"},
        {name: "Line: Torso", text:"$20", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e35/22430059_133794537272481_8801762357563883520_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=rwpyzBjvVocAX9EzqH8&se=7&oh=3ef865edc4ef97894179013b6fc9eb88&oe=5ED159CC"},
        {name: "Line: Body", text:"$23", soldout: true, source:"https://instagram.fatl1-2.fna.fbcdn.net/v/t51.2885-15/e35/12519207_1215818381765223_746003034_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=8GDY_q-qhcMAX_1IDzT&se=7&oh=ef4663030d7b21606331059902abcc74&oe=5ED90A1E"},
      ],
      [
        {name: "Color: Bust", text:"$20", soldout: true, source:"https://instagram.fatl1-2.fna.fbcdn.net/v/t51.2885-15/e35/14334829_1825690901043613_700823641_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=C1WOgEoOm3wAX9lPGFt&se=7&oh=e56802b783457bdc557956163606c66b&oe=5EDA9860"},
        {name: "Color: Torso", text:"$23", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e15/10932098_1544532769129536_978001880_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=8ZsGt42p8QcAX93I18c&oh=e262adea17bd260f1e0e6833a0f6ea8f&oe=5EBC3665"},
        {name: "Color: Body", text:"$26", soldout: true, source:"https://instagram.fatl1-2.fna.fbcdn.net/v/t51.2885-15/e35/14063642_1055222524585972_225750104_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=uLLX8pkMCMgAX_Yct9w&se=7&oh=43b9fe7ea32bb81c67bd3bf5576ca56a&oe=5EB66D81"},
      ],
      [
        {name: "Paint: Bust", text:"$30", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e35/49547428_387783655322220_7990395564960596162_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=tVEINUHUDL8AX-EqI5I&se=7&oh=af94699ea0b66dc456636e2ff0a70ae3&oe=5EA55114"},
        {name: "Paint: Torso", text:"$35", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e35/19429092_1367499576637785_2035886688114311168_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=53BUfqkUdyEAX-8h-xC&se=7&oh=0958c12ead6ad71b76b040af1db4d7a1&oe=5EA0593A"},
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
