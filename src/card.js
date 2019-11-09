import React from 'react';
import card from './ass/svg/card.svg';

function Card(props){
  return(
    <div class={"card " + props.cls} >
      <div class="card-front card-face">
        { props.pic ? <img class="card-img" src={props.pic} /> : <img class="card-img " src={card}/> }
        <div class="card-img-overlay">
          {props.name ? <h5 class="title ">{props.name}</h5> : null}
          {props.lvl  ? <h2 class="lvl ">{props.lvl}</h2> : null}
          {props.text ? <p class="text justify-content-end ">{props.text}</p> : null}
          {props.soldout ? <h5 class="soldOut ">SOLD OUT </h5> : null}
        </div>
      </div>
      <div class="card-back card-face">
        <img class="card-img" src={card}/>
      </div>
    </div>
  );
}

export default Card;
//https://www.kepplerspeakers.com/sam-m.jpg
//var flip = document.querySelector('.flip-card');
//if(flip){
//  flip.addEventListener( 'click', function() {
//    flip.classList.toggle('is-flipped');
//  });
//}
