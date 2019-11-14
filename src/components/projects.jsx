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
import bg from '.././styles/img/bgCard.jpg';


export default class Projects extends React.Component {
render() {
  const bg6 = {
    backgroundImage: "url('.././styles/img/capture6.png')"
  }

  return (
<div id="my-projects" >
  <div className="row" style={{borderTop:1+"px solid #29003b", marginLeft:6+"em", marginRight:6+"em", marginTop:4+"em"}}>
    <div className="column">
      <div className="card-1">
        <div className="flip-card" >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={capture1} alt="Hairstyle" ></img>
            </div>
            <div className="flip-card-back">
              <div style={{backgroundColor:"white", height:200+"px", width:300+"px", marginLeft:"auto", marginRight:"auto",marginTop:3+"em"}}>
                <h4>HairStyle Website</h4>
                    <a href="https://github.com/sabrinamianne/HairSalon.Solution2" target="_blank">
                      <img id="iconeImg" src={gitHub} style={{}}></img>
                    </a>
                  <p style={{marginTop:2+"em"}}> C#</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card-1">
        <div className="flip-card" >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={capture2} alt="Etsy clone" ></img>
            </div>
            <div className="flip-card-back">
              <div style={{backgroundColor:"white", height:200+"px", width:300+"px", marginLeft:"auto", marginRight:"auto",marginTop:3+"em"}}>
                <h4>HairStyle Website</h4>
                    <a href="https://github.com/sabrinamianne/Etsy-clone" target="_blank">
                      <img id="iconeImg" src={gitHub}></img>
                    </a>
                    <a href="https://etsy-clone-5a30f.firebaseapp.com" target="_blank">
                      <img src={website} ></img>
                    </a>
                  <p style={{marginTop:2+"em"}}> C#</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card-1">
        <div className="flip-card" >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={capture3} alt="Hairstyle" ></img>
            </div>
            <div className="flip-card-back">
              <div style={{backgroundColor:"white", height:200+"px", width:300+"px", marginLeft:"auto", marginRight:"auto",marginTop:3+"em"}}>
                <h4>Tap Room</h4>
                    <a href="https://github.com/sabrinamianne/Tap-Room" target="_blank">
                      <img id="iconeImg" src={gitHub}></img>
                    </a>
                  <p style={{marginTop:2+"em"}}> React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card-1">
        <div className="flip-card" >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={capture4} alt="Hairstyle" ></img>
            </div>
            <div className="flip-card-back">
              <div style={{backgroundColor:"white", height:200+"px", width:300+"px", marginLeft:"auto", marginRight:"auto",marginTop:3+"em"}}>
                <h4>Three-Card Tarot Reading</h4>
                    <a href="https://github.com/Kennedy777/TarotReading" target="_blank">
                      <img id="iconeImg" src={gitHub}></img>
                    </a>
                    <a href="https://kennedy777.github.io/TarotReading/" target="_blank">
                      <img src={website} ></img>
                    </a>
                  <p style={{marginTop:2+"em"}}>  HTML - JavaScript</p>
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="column">
      <div className="card-1">
        <div className="flip-card" >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={capture5} alt="Hairstyle" ></img>
            </div>
          <div className="flip-card-back">
            <div style={{backgroundColor:"white", height:200+"px", width:300+"px", marginLeft:"auto", marginRight:"auto",marginTop:3+"em"}}>
              <h4>Music Store</h4>
                <a href="https://github.com/sabrinamianne/Online-Store" target="_blank">
                  <img id="iconeImg" src={gitHub}></img>
                </a>
                <a href="https://online-store-de73c.web.app/admin" target="_blank">
                  <img src={website} ></img>
                </a>
              <p style={{marginTop:2+"em"}}>  Angular - Firebase </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="column">
      <div className="card-1">
        <div className="flip-card" >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={capture6} alt="managemylease" ></img>
            </div>
            <div className="flip-card-back">
              <div style={{backgroundColor:"white", height:200+"px", width:300+"px", marginLeft:"auto", marginRight:"auto",marginTop:3+"em"}}>
                <h4>Real Estate Website Template</h4>
                  <a href="https://github.com/sabrinamianne/manage-my-lease" target="_blank">
                    <img id="iconeImg" src={gitHub} ></img>
                  </a>
                <p style={{marginTop:2+"em"}}> React - Mapbox - react-map-gl  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
  }
}
