import React from 'react';
import About from './about.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import Photos from './photos.jsx';
import WOW from "wow.js";

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.about= React.createRef();
    this.projects= React.createRef();
    this.contact= React.createRef();
    this.photos= React.createRef();

    this.scrolling = this.scrolling.bind(this);
  }
  componentDidMount() {
    const WOW = require('wow.js');
    window.wow = new WOW ({
      live:false
    })
    window.wow.init();
  }

  navEffect() {
    window.addEventListener("scroll", () => {
      var navBar = document.getElementById("navbar");
      var domRect = navBar.getBoundingClientRect();

      if (domRect.y <= domRect.height) {
        navBar.classList.add("fade-in-nav");
      }
    });
  }

  scrolling(instance) {
    let node = document.getElementByID(instance.current.props.id);
    window.scrollTo({
      top: node.offsetTop,
      behavior: "smooth"
      });
  }

  render() {
    return (
      <div>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a
              className="home-style navbar-brand"
              onClick={() => {
                window.scrollTo({
                  top:0,
                  behavior:"smooth"
                });
              }}>
            </a>
            <button
              className="navbar=toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  onClick={() => {
                    this.scrolling(this.about);
                  }}
                  className="btn-style nav-item nav-link">
                  About
                </a>
                <a
                  onClick={() => {
                    this.scrolling(this.projects);
                  }}
                  className="btn-style nav-item nav-link">
                  Projects
                </a>
                <a
                  onClick={() => {
                    this.scrolling(this.photos);
                  }}
                  className="btn-style nav-item nav-link">
                  Photos
                </a>
                <a
                  onClick={() => {
                    this.scrolling(this.contact);
                  }}
                  className="btn-style nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        <About
          ref={this.about}
          id="about-container"
          bounceLeft={"wow bounceInLeft"}
          fadeInLeft={"wow fadeInLeft"}
          fadeInRight={"wow fadeInRight"}
          fadeIn={"wow fadeIn"}
          tada={"wow fadeIn"}
        />
        <Projects
          ref={this.projects}
          id="my-projects"
          fadeInRight={"wow fadeInRight"}
          fadeIn={"wow fadeIn"}
          />
        <Photos
          ref={this.photos}
          id="my-photos"
          fadeInRight={"wow fadeInRight"}
          fadeIn={"wow fadeIn"}
        />
        <Contact
          ref={this.contact}
          id="my-contact"
          fadeInLeft={"wow fadeInLeft"}
          shake={"wow pulse"}
        />
      </div>
    );
  }
}

export default Navbar;
