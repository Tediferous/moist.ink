import React from 'react';
import './css/card.css';
import card from './ass/svg/blackCard.svg';

function Card(props){
  return(
    <div class={"card poker " + props.cls} >
      { props.pic ? <img class="card-img" src={props.pic} /> : <img class="card-img" src={card}/> }
      <div class="card-img-overlay">
      {props.name ? <h5 class="title">{props.name}</h5> : null}
      {props.lvl  ? <h2 class="lvl">LVL.{props.lvl}</h2> : null}
      {props.text ? <p class="text justify-content-end">{props.text}</p> : null}
      </div>
    </div>
  );
}
export default Card;
//https://www.kepplerspeakers.com/sam-m.jpg
