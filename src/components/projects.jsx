import React from 'react';
import PropTypes from "prop-types";
import '.././styles/style.css';
import capture1 from '.././styles/img/capture1.jpg';
import capture2 from '.././styles/img/capture2.png';
import capture3 from '.././styles/img/capture3.png';
import capture4 from '.././styles/img/capture4.png';
import capture5 from '.././styles/img/capture5.png';
import capture6 from '.././styles/img/capture6.png';
import gitHub from '.././styles/img/git.png';
import website from '.././styles/img/internet.jpg';


export default class Projects extends React.Component {
render() {

  return (
<div id="my-projects" style={{marginLeft:6+"em", marginRight:6+"em", marginTop:2+"em"}}>
  <div className="row" style={{marginTop:1+"em"}}>
    <div class="box">
      <div class="card">
        <div class="imgBx">
          <img src={capture1} alt="Hairstyle" ></img>
        </div>
        <div class="details">
          <h2>HairSalon<br/></h2>
            <a href="https://github.com/sabrinamianne/HairSalon.Solution2" target="_blank">
              GitHub
            </a>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <img src={capture2} alt="Etsy Clone" ></img>
        </div>
        <div class="details">
          <h2>Etsy Clone<br/></h2>
            <a href="https://github.com/sabrinamianne/Etsy-clone" target="_blank">
              GitHub |
            </a>
            <a href="https://etsy-clone-5a30f.firebaseapp.com" target="_blank">
            &nbsp;Website 
            </a>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="card">
        <div class="imgBx">
          <img src={capture3} alt="Tap Room" ></img>
        </div>
        <div class="details">
          <h2>Tap Room<br/></h2>
            <a href="https://github.com/sabrinamianne/Tap-Room" target="_blank">
              GitHub
            </a>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <img src={capture4} alt="Three-Card Tarot Reading" ></img>
        </div>
        <div class="details">
          <h2>Three-Card Tarot Reading<br/></h2>
            <a href="https://github.com/Kennedy777/TarotReading" target="_blank">
              GitHub |
            </a>
            <a href="https://kennedy777.github.io/TarotReading/" target="_blank">
            &nbsp;Website
            </a>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="card">
        <div class="imgBx">
          <img src={capture5} alt="Music Store" ></img>
        </div>
        <div class="details">
          <h2>Music Store<br/></h2>
            <a href="https://github.com/sabrinamianne/Online-Store" target="_blank">
              GitHub |
            </a>
            <a href="https://online-store-de73c.web.app/admin" target="_blank">
            &nbsp;Website
            </a>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
          <img src={capture6} alt="Real Estate Website Template" ></img>
        </div>
        <div class="details">
          <h2>Real Estate Website Template<br/></h2>
            <a href="https://github.com/sabrinamianne/manage-my-lease" target="_blank">
              GitHub
            </a>
        </div>
      </div>
    </div>
  </div>
</div>

    );
  }
}
