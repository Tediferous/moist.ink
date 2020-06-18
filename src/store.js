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
        {name: "Sketch: Bust", text:"$14", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e35/90425333_198236331479868_258833395565579037_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Nrj-ToEabUEAX-0oh-R&oh=2030eedd529277a4014d084e388a8b73&oe=5EFEE95E"},
        {name: "Sketch: Torso", text:"$17", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e35/13259668_568701556621859_823926736_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=BBuGjldaHLUAX8qwARH&oh=40506bad90bd9998a8bc717e58e77415&oe=5EFEBA78"},
        {name: "Sketch: Body", text:"$20", soldout: true, source:"https://instagram.fatl1-2.fna.fbcdn.net/v/t51.2885-15/e35/25038570_712622265603808_2163419497086582784_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=JND0qsmJW7oAX_lWUp0&oh=799a77ce784322f72b83c7d2c98306c9&oe=5EFD57DA"},
      ],
      [
        {name: "Line: Bust", text:"$17", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/47582454_356047035210598_7209372110621819184_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=EdnArnAMbfoAX9ZYcrZ&oh=6278858fdae7f99a4366b4690b1ab12a&oe=5EFD4FAD"},
        {name: "Line: Torso", text:"$20", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e35/22430059_133794537272481_8801762357563883520_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=-P5KA-m5fKcAX_tGwGH&oh=3f2ca10220d735518f36f8fabda1ea5c&oe=5EFEBD34"},
        {name: "Line: Body", text:"$23", soldout: true, source:"https://instagram.fatl1-2.fna.fbcdn.net/v/t51.2885-15/e35/31287351_2099883800256079_5282531451609284608_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=av7o8KhruIcAX_EOykA&oh=00d138ba1fb7f021fe42fe4a8afacee1&oe=5F016207"},
      ],
      [
        {name: "Color: Bust", text:"$20", soldout: true, source:"https://instagram.fatl1-2.fna.fbcdn.net/v/t51.2885-15/e35/11931256_182906552067523_86654381_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=7AQprrEmSJIAX9y4UMS&oh=f6adbab4a47b59f9c50f7adce2c70bc0&oe=5F142958"},
        {name: "Color: Torso", text:"$23", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e15/10932098_1544532769129536_978001880_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=h93hUmCePnIAX95bjZf&oh=cb0f20584f780a8f2dbb483401bd4727&oe=5EFC259B"},
        {name: "Color: Body", text:"$26", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e35/13715052_837599623038117_1402532284_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=SqPrG22hMQUAX_NJS7j&oh=418f0a3ea3b828529c45924032151444&oe=5EFD2B4D"},
      ],
      [
        {name: "Paint: Bust", text:"$30", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e35/49547428_387783655322220_7990395564960596162_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=TrR_-VzyAz0AX9PraN0&oh=230c3fd94c55b60431c5993b7a69d574&oe=5EFF446C"},
        {name: "Paint: Torso", text:"$35", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e35/19429092_1367499576637785_2035886688114311168_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=DkplxQ5XDR4AX_v63Xz&oh=2fa1a920e5fddf0c6a58b364282264f6&oe=5EFC5346"},
      ],
      [
        {name: "3D: Bust", text:"$45", soldout: true, source:"https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/e35/100955179_165034768321188_4922360198634213758_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=H7sVZxa48oQAX8YhBFi&oh=7a2551be4a0b3176c522fa8b6f5353a5&oe=5EFB7C31"},
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
