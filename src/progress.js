import React from 'react';
import './css/progress.scss';

function Progress(props){
  return(
    <div className="progress">
      <div className={"progress-bar " + props.color} role="progressbar" style={{ width: props.power+"%"}} aria-valuenow={ "" + props.power} aria-valuemin="0" aria-valuemax="100">{props.stat}</div>
    </div>
  );
}
export default Progress;
