import React from "react";
import '.././styles/style.css';
import linkedin from '.././styles/img/linkedin-icon.png';
import gitHub from '.././styles/img/git.png';
import gmail from '.././styles/img/gmail.png';
import icone from '.././styles/img/arrow.png';
import resume from '.././styles/img/resume.jpg';

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="middle-icon">
          <a href="https://www.linkedin.com/in/sabrinamianne/" target="_blank">
            <img src={linkedin} style={{height:50+"px"}}></img>
          </a>
          <a href="https://github.com/sabrinamianne" target="_blank">
            <img src={gitHub} style={{height:50+"px"}}></img>
          </a>
          <a href="mailto:sabrina.mianne.portfolio@gmail.com" target="_blank">
            <img src={gmail} style={{height:40+"px", marginLeft:6+"px"}}></img>
          </a>
          <a href="https://gist.github.com/sabrinamianne/f815d0083ff514bb19ee1f5fb23237cf" target="_blank">
            <img src={resume} style={{height:40+"px", marginLeft:10+"px"}}></img>
          </a>
        </div>
        <div className="scrollToTop" >
          <a href="#"><img src={icone} alt="icone" style={{ marginTop: 2 +"rem" , marginBottom:4+"em",marginLeft:"auto", marginRight: "auto", display: "block", width: 2.5 + "em"}}></img></a>
        </div>
        <div>
            <p style={{ fontWeight:"lighter", textAlign:"center"}}>2022 ©  Copyright Sabrina Mianne | All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}
export default Footer;
