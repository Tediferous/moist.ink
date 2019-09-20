import React from 'react';
import './css/App.css';
import Navbar from './navbar'
import Jumbo from './jumbotron'
import Foot from './foot'
import Card from './card'
import Progress from './progress'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Jumbo/>
      <div class="section">
        <div class="container"><div class="row"><h2 class="box">2D</h2> <h4>BOOP</h4></div></div>
        <div class="hand">
          <Card pic="https://www.kepplerspeakers.com/sam-m.jpg" text="This is a sentence."/>
          <Card name="Idris" pic="https://www.kentonline.co.uk/_media/img/E53S8J8TMG26MHBFHSRT.jpg" text="This is a really fucking long sentence, jesus fucking christ!"/>
          <Card/>
          <Card name="Austin (or maybe Xavier Woods, depends who's asking)" pic="https://66.media.tumblr.com/84420e4680ec8a4a70e5a988882eca61/tumblr_ojzjqxYofX1qevcs2o1_500.gif" text="This is a sentence."/>
          <Card name="Scott" pic="https://newsjustnow.com/wp-content/uploads/2019/04/041419-music-kid-cudi-coachella-performance.jpg" />
        </div>
      </div>
      <hr/>

      <div class="flex-container">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
      <hr/>


        <div class="flex-bio">
          <Card  name="Donald" lvl="35" pic="https://i.pinimg.com/originals/87/bf/ea/87bfeaddc6817307ed2420c92dbe5cf0.png"/>

          <div class="stats">
            <Progress color="bg-success"   power="62" stat="HEALTH"/>
            <Progress color=""            power="49" stat="POWER"/>
            <Progress color="bg-info"     power="84" stat="CHARSIMA"/>
            <Progress color="bg-warning"  power="78" stat="STEALTH"/>
            <Progress color="bg-danger"  power="2" stat="THICKNESS"/>

  <p>  Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.

The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.

</p>
          </div>

        </div>
        <hr/>

      <Foot/>
    </div>
  );
}

export default App;
