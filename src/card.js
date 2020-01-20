import React from 'react';
import card from './ass/svg/card.svg';
import lock from './ass/svg/lock.svg';

const Card = (props) => {
  var isF  = props.isFlipped ? " is-flipped" : "";
  var canF = props.canFlip ? " flip-card" : "";
  var poke = props.poker ? " poker" : "";
  return(
    <a href={props.href}>
    <div className={"card" +isF +canF +poke } style={props.style}>
      <div className="card-front card-face">
        { props.pic ? <img className="card-img" src={props.pic} alt=""/> : <img className="card-img " src={card} alt=""/> }
        <div className="card-img-overlay">
          {props.name ? <h5 className="title ">{props.name}</h5> : null}
          {props.locked ? <img className="lock" src={lock} alt=""/> : null }
          {props.lvl  ? <h2 className="lvl ">{props.lvl}</h2> : null}
          {props.text ? <p className="text justify-content-end ">{props.text}</p> : null}
          {props.soldout ? <h5 className="soldOut ">SOLD OUT </h5> : null}
        </div>
      </div>
      <div className="card-back card-face">
        { props.canFlip ? <img className="card-img" src={card} alt=""/> : <div/>}
      </div>
    </div>
    </a>

  );
}
export default Card;
