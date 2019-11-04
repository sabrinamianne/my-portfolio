import React from "react";
import PropTypes from "prop-types";
import me from ".././styles/img/portrait.jpg";

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}>
					Full Stack Developer
				</h1>
				<img src={me} style={{ borderRadius: 50 + "%", marginTop: 4 +"rem" , marginLeft:"auto", marginRight: "auto", display: "block", width: 30 + "%"}}></img>
				<div className="row mt-5">
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
					</div>
				</div>

				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">

						<p className={"mytext pt-3 " + this.props.fadeIn} >
							Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. Since beginning my journey as a freelance designer nearly 8 years ago,
						</p>
						<p className={"mytext pt-3 " + this.props.fadeIn} >Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies
						</p>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 " +
							this.props.tada
						}>
						<div className="progress mb-3">
							<div
								className="progress-bar bg-warning fill-80-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar bg-warning fill-80-bar"
								role="progressbar"
								style={{ width: 70 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								C#
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar bg-warning fill-90-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								PYTHON
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar bg-warning fill-60-bar"
								role="progressbar"
								style={{ width: 50 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								PHP
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar bg-warning fill-80-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar bg-warning fill-80-bar"
								role="progressbar"
								style={{ width: 70 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								ReactJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar bg-warning fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								AngularJS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar bg-warning fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								NodeJs
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar bg-warning fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Bootstrap
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar bg-warning fill-60-bar"
								role="progressbar"
								style={{ width: 70 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								JQuery
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar bg-warning fill-60-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar bg-warning fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								SASS
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
