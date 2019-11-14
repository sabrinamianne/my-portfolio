import React from "react";
import '.././styles/style.css';
import linkedin from '.././styles/img/linkedin-icon.png';
import gitHub from '.././styles/img/git.png';
import gmail from '.././styles/img/gmail.png';

export class Footer extends React.Component {
  render() {
    return (
      <div>

        <div className="middle-icon">

          <a href="https://www.linkedin.com/in/sabrinamianne/" target="_blank">
            <img src={linkedin} style={{marginLeft: 46+"%"}}></img>
          </a>
          <a href="https://github.com/sabrinamianne" target="_blank">
            <img src={gitHub} style={{height:3.8+"em"}}></img>
          </a>
          <a href="mailto:sabrina.mianne.portfolio@gmail.com" target="_blank">
            <img src={gmail} style={{height:2.9+"em"}}></img>
          </a>
            <p style={{marginLeft:2+"em", fontWeight:"lighter", textAlign:"center"}}>2019 ©  Copyright Sabrina Mianne | All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}
export default Footer;
