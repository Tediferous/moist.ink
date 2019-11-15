import React from 'react';
import card from './ass/svg/card.svg';

function Card(props){
  return(
    <div className={"card " + props.cls} >
      <div className="card-front card-face">
        { props.pic ? <img className="card-img" src={props.pic} alt=""/> : <img className="card-img " src={card} alt=""/> }
        <div className="card-img-overlay">
          {props.name ? <h5 className="title ">{props.name}</h5> : null}
          {props.lvl  ? <h2 className="lvl ">{props.lvl}</h2> : null}
          {props.text ? <p className="text justify-content-end ">{props.text}</p> : null}
          {props.soldout ? <h5 className="soldOut ">SOLD OUT </h5> : null}
        </div>
      </div>
      <div className="card-back card-face">
        <img className="card-img" src={card} alt=""/>
      </div>
    </div>
  );
}

export default Card;
