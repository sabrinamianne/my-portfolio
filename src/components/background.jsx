import React from "react";
import PropTypes from "prop-types";
import WOW from "wow.js";

export default class Background extends React.Component {

  componentDidMount() {
    const WOW = require('wow.js');
    window.wow = new WOW ({
      live:true
    })
    window.wow.init();
  }

	render() {
		return (
			<div id="my-background" className="background">
				<div className="top-container flex" style={{fontFamily:"monospace"}}>
				<p id="bc" className={this.props.bounceLeft} style={{fontFamily:"monospace",textAlign:"center"}}>
				<br/> Sabrina_Mianne = ( Software Developer ) {"=>"} Welcome!
				</p>
					{/*<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.projectsRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						View my work
					</button>*/}
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	projectsRef: PropTypes.object,
	bounceIn: PropTypes.string,
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
