import React from 'react';
import './css/progress.css';

function Progress(props){
  return(
    <div class="progress">
      <div class={"progress-bar " + props.color} role="progressbar" style={{ width: props.power+"%"}} aria-valuenow={ "" + props.power} aria-valuemin="0" aria-valuemax="100">{props.stat}</div>
    </div>
  );
}
export default Progress;
