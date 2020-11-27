import React, { Component } from "react";
import About from './about.jsx';
import Background from './background.jsx';
import Footer from './footer.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import Photos from './photos.jsx';
import icone from '.././styles/img/icone.png';
import '.././styles/style.css';


export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.about= React.createRef();
    this.projects= React.createRef();
    this.contact= React.createRef();
    this.photos= React.createRef();

    this.scrolling = this.scrolling.bind(this);

    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  scrolling(instance) {
    let node = document.getElementById(instance.current.props.id);
    window.scrollTo({
      top: node.offsetTop,
      behavior: "smooth"
    });
  }

  render() {
    const nav = {
      fontSize:"22px",
      marginRight:"7%",
      marginLeft:"3%",
      fontFamily:"monospace"
    }


  const show = (this.state.menu) ? "show" : "" ;

  return (
<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a
        className="navbar-brand"
        onClick={() => {
          window.scrollTo({
            top:0,
            behavior:"smooth",
          });
        }}>
      </a>
      <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse " + show}>
        <div className="navbar-nav">
        <a
          onClick={() => {
            this.scrolling(this.about);
          }}
          className="btn-style nav-item nav-link" style={nav}>
          About
        </a>
        <a
          onClick={() => {
            this.scrolling(this.projects);
          }}
          className="btn-style nav-item nav-link" style={nav}>
          Projects
        </a>
        <a
          onClick={() => {
            this.scrolling(this.photos);
          }}
          className="btn-style nav-item nav-link" style={nav}>
          Photos
        </a>
        <a
          onClick={() => {
            this.scrolling(this.contact);
          }}
          className="btn-style nav-item nav-link" style={nav}>
          Contact
        </a>
        <a href="https://www.linkedin.com/in/sabrinamianne/" className="btn-style nav-item nav-link" style={nav}>
          Linkedin
        </a>
        <a href="https://github.com/sabrinamianne" className="btn-style nav-item nav-link" style={nav}>
          Github
        </a>
        </div>
      </div>
    </nav>
    <Background
      ref={this.navEffect}
      id="my-background"
      projectsRef={this.projects}
      bounceIn={"wow bounceIn"}
    />
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
