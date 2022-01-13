import React from "react";
import PropTypes from "prop-types";
import me from ".././styles/img/portrait.jpg";
import html from ".././styles/img/skills/html.png";
import css from ".././styles/img/skills/css.png";
import js from ".././styles/img/skills/js.png";
import python from ".././styles/img/skills/python.png";
import cSharp from ".././styles/img/skills/cSharp.png";
import react from ".././styles/img/skills/react.png";
import angular from ".././styles/img/skills/angular.png";
import node from ".././styles/img/skills/node.png";
import boot from ".././styles/img/skills/boot.png";
import sql from ".././styles/img/skills/mySql.png";
import firebase from ".././styles/img/skills/firebase.png";
import git from ".././styles/img/skills/git.png";


export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft} style={{fontSize:5+"em",fontFamily:"monospace"}}>
					 About me
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
						<p className={"mytext pt-3 " + this.props.fadeIn} style={{fontSize:21+"px"}}>
						I am a software developer born in Paris, living in Seattle.<br/>
						I have always been fascinated by computers and the logic behind the screen.<br/>
						My passion for computing and new technologies led me to learn Python and Lisp, 
						and then to attend a bootcamp where I was able to work on a diverse portfolio of web applications 
						using JavaScript, C#, React, Angular, SQL, and HTML/CSS.<br/>
						I have unlimited curiosity and willingness to understand how things work, and I love fixing them. 
						I am eager to learn and thrive when I gain new knowledge, and I am obsessed with making things and even more obsessed with making things better.
						
					</p>
						
					</div>
				</div>
				<div className="skills" style={{marginTop:8+"em"}}>
					<a href="https://www.python.org/" target="blank" title="python"><img src={python} alt="python icone" style={{height:45+"px",marginLeft:1.7+"em"}}></img></a>
					<a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="blank" title="csharp"><img src={cSharp} alt="cSharp icone" style={{height:60+"px",marginLeft:2+"em"}}></img></a>
					<a href="https://www.javascript.com/" target="blank" title="javascript"><img src={js} alt="js icone" style={{height:45+"px",marginLeft:0.8+"em"}}></img></a>
					<a href="https://html.com/" target="blank" title="html"><img src={html} alt="html icone" style={{height:50+"px"}}></img></a>
					<a href="http://www.css3.info/" target="blank" title="css"><img src={css} alt="css icone" style={{height:50+"px",marginLeft:2+"em"}}></img></a>
					<a href="https://getbootstrap.com/" target="blank" title="bootstrap"><img src={boot} alt="bootstrap icone" style={{height:45+"px",marginLeft:2+"em"}}></img></a>
					<a href="https://reactjs.org/" target="blank" title="react"><img src={react} alt="react icone" style={{height:45+"px",marginLeft:2+"em"}}></img></a>
					<a href="https://angular.io/" target="blank" title="angular"><img src={angular} alt="angular icone" style={{height:50+"px",marginLeft:2+"em"}}></img></a>
					<a href="https://nodejs.org/en/" target="blank" title="nodejs"><img src={node} alt="node icone" style={{height:42+"px",marginLeft:2+"em"}}></img></a>
					<a href="https://www.mysql.com/" target="blank" title="mysql"><img src={sql} alt="mySql icone" style={{height:42+"px",marginLeft:2+"em",width:4+"em"}}></img></a>
					<a href="https://firebase.google.com/?gclid=Cj0KCQiAk7TuBRDQARIsAMRrfUaCDoeSls04SvHFnlqRtqZL-4BmAWjDjHUj9UAX-TeC_c-3pYbP00QaArwWEALw_wcB" target="blank" title="firebase"><img src={firebase} alt="firebase icone" style={{height:45+"px",marginLeft:2+"em"}}></img></a>
					<a href="https://git-scm.com/" target="blank" title="git"><img src={git} alt="git icone" style={{height:42+"px",marginLeft:2+"em"}}></img></a>
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
