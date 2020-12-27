import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(<App />, document.getElementById('root'));
var flips = document.getElementsByClassName("flip-card");

for(var i=0; i<flips.length; i++) {
  flips[i].addEventListener('click', function() {
    this.classList.toggle('is-flipped');
    var grandDaddy = this.parentElement.parentElement;

    if (grandDaddy.classList.contains('member')){
      grandDaddy.classList.toggle('active');
    }
  },false);
}

const video = document.getElementById("video");
video.playbackRate = 0.5;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

