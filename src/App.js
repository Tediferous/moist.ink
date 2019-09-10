import React from 'react';
import './css/App.css';
import Navbar from './navbar'
import Jumbo from './jumbotron'
import Foot from './foot'
import Card from './card'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Jumbo/>
      <div class="section">
      <div class="container"><div class="row"><h2 class="box justify-content-start">2D</h2> <h4>FUCK</h4></div></div>
      <div class="hand">
      <Card pic="https://www.kepplerspeakers.com/sam-m.jpg" text="This is a sentence."/>
      <Card name="Idris" pic="https://www.kentonline.co.uk/_media/img/E53S8J8TMG26MHBFHSRT.jpg" text="This is a really fucking long sentence, jesus fucking christ!"/>
      <Card/>
      <Card name="Austin (or maybe Xavier Woods, depends who's asking)" pic="https://66.media.tumblr.com/84420e4680ec8a4a70e5a988882eca61/tumblr_ojzjqxYofX1qevcs2o1_500.gif" text="This is a sentence."/>
      <Card name="Scott" pic="https://newsjustnow.com/wp-content/uploads/2019/04/041419-music-kid-cudi-coachella-performance.jpg" />
      </div>
      </div>
      <Foot/>
    </div>
  );
}

export default App;
