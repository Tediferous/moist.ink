import React from 'react';
import './css/App.scss';
import './css/animation.scss';
import './css/vars.scss';
import Navbar from './navbar'
import Jumbo from './jumbotron'
import Foot from './foot'
import Script from './script'
import Card from './card'
import Progress from './progress'

/* window.getComputedStyle(document.getElementById("myApp")).getPropertyValue("background-color"); */
function App() {
  return (
    <div id="myApp" className="App">
      <Navbar/>
      <Jumbo/>
      <div className="section">
        <div className="container"><div className="row"><h2 className="box">2</h2> <h4>BOOP</h4></div></div>
        <div className="hand">
          <Card cls="poker" pic="https://www.kepplerspeakers.com/sam-m.jpg" text="This is a sentence."/>
          <Card cls="poker" name="Idris" pic="https://www.kentonline.co.uk/_media/img/E53S8J8TMG26MHBFHSRT.jpg" text="This is a really fucking long sentence, jesus fucking christ!"/>
          <Card cls="poker flip-card is-flipped" name="Christopher" pic="https://instagram.fatl1-1.fna.fbcdn.net/vp/fd75902f8b58a516b352dfe7d23ce2a4/5E5811CB/t51.2885-15/sh0.08/e35/p640x640/65309994_470543310408753_6907471006986291045_n.jpg?_nc_ht=instagram.fatl1-1.fna.fbcdn.net&_nc_cat=109" text="New music soon..."/>
          <Card cls="poker" name="Austin (or maybe Xavier Woods, depends who's asking)" pic="https://66.media.tumblr.com/84420e4680ec8a4a70e5a988882eca61/tumblr_ojzjqxYofX1qevcs2o1_500.gif" text="This is a sentence."/>
          <Card cls="poker" name="Scott" pic="https://i.pinimg.com/originals/31/1d/b6/311db6e2482851777e2caf17582e6627.jpg" />
        </div>
      </div>
      <hr/>

      <div className="flex-container">
          <Card cls="poker" />
          <Card cls="poker" />
          <Card cls="poker" />
          <Card cls="poker" />
      </div>
      <hr/>


        <div className="flex-bio">
          <Card cls="poker flip-card"  name="Donald" lvl="lvl.35" pic="https://i.pinimg.com/originals/87/bf/ea/87bfeaddc6817307ed2420c92dbe5cf0.png"/>

          <div className="stats">
            <div className="stat-row">
              <Progress color="green"   power="62" stat="HEALTH"/>
              <Progress color="cyan"     power="84" stat="CHARSIMA"/>
            </div>
            <div className="stat-row">
              <Progress color="blue"            power="49" stat="POWER"/>
              <Progress color="yellow"  power="78" stat="SPEED"/>
            </div>
            <div className="stat-row">
              <Progress color="red"  power="2" stat="THICKNESS"/>
              <Progress color="magenta"  power="60" stat="STEALTH"/>
            </div>

  <p>  Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.

The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.

</p>
          </div>

        </div>
        <hr/>

      <div className="store section">
        <div className="container"><div className="row"><h2 className="box">THINGS</h2> <h4>Buy them</h4></div></div>
        <div className="hand">
          <Card cls="poker" name="BLACK" soldout="true"text="A cool thing" pic="https://cdn11.bigcommerce.com/s-iodt3qca/images/stencil/1280x1280/products/505/966/s-l1600__06219.1538706999.jpg?c=2?imbypass=on"/>
          <Card cls="poker" name="WHITE" lvl="$10" pic="https://images-na.ssl-images-amazon.com/images/I/71IlJIxSypL._SL1000_.jpg"/>
        </div>
        <hr/>
        <div className="hand">
          <Card cls="poker" soldout="true"/>
          <Card cls="poker" />
          <Card cls="poker" />
          <Card cls="poker" soldout="true"/>
        </div>
        <hr/>
        <div className="hand">
          <Card cls="poker" />
          <Card cls="poker" soldout="true"/>
          <Card cls="poker" />
        </div>
      </div>
      <hr/>

      <Foot/>
      <Script/>
    </div>
  );
}

export default App;
