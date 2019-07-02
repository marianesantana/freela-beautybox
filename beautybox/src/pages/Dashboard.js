import React, { Component } from 'react';
import brandguardian from '../assets/images/Group 1195.svg'
import beautybox from '../assets/images/beautybox.svg'
import seta from '../assets/images/seta.svg'
import "./Dashboard.css"

export default class Dashboard extends Component {
  
  render() {
    return (
      <div class="row">
        <div id="id1" class="column">
          <img src={beautybox}/>
        <div id="id2" class="column" >
         <img src={brandguardian}/>
        </div>
        </div>
        <div id="seta">
          <img class="seta" src={seta}></img>
        </div>
        <div id="form" class="column">
          <p> Vamos lá? </p>
          <input type="text" placeholder="e-mail"/> 
          <input type="text" placeholder="senha"/>
          <hr></hr>
          <button onClick="/list"> OK </button>
        </div>
      </div>
    );
  }
}

