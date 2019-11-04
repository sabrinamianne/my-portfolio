import React from "react";
import '.././styles/style.css';


export class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="container-fluid text-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-8 mx-auto">
              <a
                href="https://www.linkedin.com/in/sabrinamianne/"
                target="_blank"
                rel="noopener noreferrer">
              </a>
              <a
                href="https://github.com/sabrinamianne"
                target="_blank"
                rel="noopener noreferrer">
              </a>

            </div>
          </div>
          <a href="#" class="scrollToTop">Scroll To Top</a>
        </div>
      </div>
    );
  }
}
export default Footer;
