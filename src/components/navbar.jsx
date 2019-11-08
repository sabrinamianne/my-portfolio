import React from "react";
import About from './about.jsx';
import Background from './background.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import Photos from './photos.jsx';
import icone from '.././styles/img/icone.png';
import '.././styles/style.css';


export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.about= React.createRef();
    this.projects= React.createRef();
    this.contact= React.createRef();
    this.photos= React.createRef();

    this.scrolling = this.scrolling.bind(this);
  }


  navEffect() {
    window.addEventListener("scroll", () => {
      var navBar = document.getElementById("navbar");
      var domRect = navBar.getBoundingClientRect();
      var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

      if (domRect.y <= domRect.height) {
        navBar.classList.add("fade-in-nav");
      }
      if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}

    });
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
      fontSize:"27px",
      marginRight:"25%",
      marginLeft:"5%",
      fontFamily:"monospace"
    }

    const iconeStyle = {
      zIndex:"-1",
      height:"4em",

    }

    return (
      <div>
        <div className="scrollToTop" >
          <a href="#"><img src={icone} alt="icone" style={iconeStyle}></img></a>
        </div>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-light" style={{position: "sticky", backgroundColor:"white"}}>
          <div className="container">
            <a
              className="home-style navbar-brand"
              onClick={() => {
                window.scrollTo({
                  top:0,
                  behavior:"smooth",
                });
              }}>
            </a>
            <button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarNavAltMarkup"
              >

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
              </div>
            </div>
          </div>
        </nav>
        <Background
          ref={this.navEffect}
          id="my-background"
          aboutRef={this.about}
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

export default Navbar;
