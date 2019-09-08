import React from 'react';
import './css/card.css';

function Card(props){
  return(
    <div class="card poker">
      <img class="card-img" src={props.pic}/>
      <div class="card-img-overlay">
        <h5 class="title">{props.name}</h5>
        <p class="text justify-content-end">{props.text}</p>
      </div>
    </div>
  );
}
export default Card;
//https://www.kepplerspeakers.com/sam-m.jpg
