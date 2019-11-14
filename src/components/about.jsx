import React from "react";
import PropTypes from "prop-types";
import me from ".././styles/img/portrait.jpg";
import html from ".././styles/img/skills/html.png";
import css from ".././styles/img/skills/css.png";
import js from ".././styles/img/skills/js.png";
import python from ".././styles/img/skills/python.png";
import cSharp from ".././styles/img/skills/cSharp.png";
import php from ".././styles/img/skills/php.png";
import react from ".././styles/img/skills/react.png";
import angular from ".././styles/img/skills/angular.png";
import node from ".././styles/img/skills/node.png";
import boot from ".././styles/img/skills/boot.png";
import sql from ".././styles/img/skills/mySql.png";
import firebase from ".././styles/img/skills/firebase.png";
import git from ".././styles/img/skills/git.png";
import wp from ".././styles/img/skills/wordpress.png";


export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft} style={{fontSize:5+"em",fontFamily:"monospace"}}>
					Full Stack Developer Junior
				</h1>
				<img src={me} alt="me" style={{ borderRadius: 50 + "%", marginTop: 4 +"rem" , marginLeft:"auto", marginRight: "auto", display: "block", width: 30 + "%"}}></img>
				<div className="row mt-5">
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
					</div>
				</div>

				<div className="row" style={{ marginTop: 5 + "rem", fontFamily:"monospace",marginLeft:0}}>
					<div className="col-12 col-lg-12 hidden" style={{textAlign:"center"}}>
						<p className={"mytext pt-3 " + this.props.fadeIn} style={{fontSize:23+"px"}}>
							I have been passionate about creating things since my early childhood,
							 I loved creating new games, I wrote a lot of stories, poems, songs that my sisters loved and sang,
							 from what they told me.
							 I think that's what attracted me primarily in coding, having to create lines of code,
							 improving existing code, looking for new ways to improve an application.
						</p>
						<p className={"mytext pt-3 " + this.props.fadeIn} style={{fontSize:23+"px"}}>
							After many years looking for what I wanted to do in my life,
						 I am happy now to have finally found what drives me.
						</p>
					</div>
				</div>
				<div className="skills" style={{marginTop:8+"em"}}>

					<img src={python} alt="python icone" style={{height:45+"px",marginLeft:1.7+"em"}}></img>
					<img src={cSharp} alt="cSharp icone" style={{height:60+"px",marginLeft:2+"em"}}></img>
					<img src={php} alt="php icone" style={{height:40+"px",marginLeft:2+"em", width:4+"em"}}></img>
					<img src={js} alt="js icone" style={{height:45+"px",marginLeft:0.8+"em"}}></img>
					<img src={html} alt="html icone" style={{height:50+"px"}}></img>
					<img src={css} alt="css icone" style={{height:50+"px",marginLeft:2+"em"}}></img>
					<img src={boot} alt="bootstrap icone" style={{height:45+"px",marginLeft:2+"em"}}></img>
					<img src={react} alt="react icone" style={{height:45+"px",marginLeft:2+"em"}}></img>
					<img src={angular} alt="angular icone" style={{height:50+"px",marginLeft:2+"em"}}></img>
					<img src={wp} alt="wordpress icone" style={{height:43+"px",marginLeft:2+"em"}}></img>
					<img src={node} alt="node icone" style={{height:42+"px",marginLeft:2+"em"}}></img>
				  <img src={sql} alt="mySql icone" style={{height:42+"px",marginLeft:2+"em",width:4+"em"}}></img>
					<img src={firebase} alt="firebase icone" style={{height:45+"px",marginLeft:2+"em"}}></img>
					<img src={git} alt="git icone" style={{height:42+"px",marginLeft:2+"em"}}></img>
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
