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
      <div class="row">
      <Card name="Sam" pic="https://www.kepplerspeakers.com/sam-m.jpg" text="This is a sentence."/>
      <Card name="Idris" pic="https://www.kentonline.co.uk/_media/img/E53S8J8TMG26MHBFHSRT.jpg" text="This is a sentence."/>
      <Card name="Austin" pic="https://66.media.tumblr.com/84420e4680ec8a4a70e5a988882eca61/tumblr_ojzjqxYofX1qevcs2o1_500.gif" text="This is a sentence."/>
      <Card name="Scott" pic="https://newsjustnow.com/wp-content/uploads/2019/04/041419-music-kid-cudi-coachella-performance.jpg" text="This is a sentence."/>
      </div>
      <Foot/>
    </div>
  );
}

export default App;
