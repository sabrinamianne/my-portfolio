import React from 'react';
import $ from "jquery";
import '.././styles/style.css';
import img1 from '.././styles/img/img1.jpg';
import img2 from '.././styles/img/img2.jpg';
import img3 from '.././styles/img/img3.jpg';
import img4 from '.././styles/img/img4.jpg';
import img5 from '.././styles/img/img5.jpg';
import img6 from '.././styles/img/img6.jpg';
import img7 from '.././styles/img/img7.jpg';
import img8 from '.././styles/img/img8.jpg';
import img9 from '.././styles/img/img9.jpg';
import img10 from '.././styles/img/img10.jpg';
import img11 from '.././styles/img/img11.jpg';
import img12 from '.././styles/img/img12.jpg';
import img13 from '.././styles/img/img13.jpg';
import img14 from '.././styles/img/img14.jpg';
import img15 from '.././styles/img/img15.jpg';
import img16 from '.././styles/img/img16.jpg';
import img17 from '.././styles/img/img17.jpg';
import img18 from '.././styles/img/img18.jpg';
import img19 from '.././styles/img/img19.jpg';
import img20 from '.././styles/img/img20.jpg';
import img21 from '.././styles/img/img21.jpg';
import img22 from '.././styles/img/img22.jpg';
import img23 from '.././styles/img/img23.jpg';
import img24 from '.././styles/img/img24.jpg';
import img25 from '.././styles/img/img25.jpg';
import img26 from '.././styles/img/img26.jpg';
import img27 from '.././styles/img/img27.jpg';
import img28 from '.././styles/img/img28.jpg';
import img29 from '.././styles/img/img29.jpg';
import img30 from '.././styles/img/img30.jpg';
import img31 from '.././styles/img/img31.jpg';
import img32 from '.././styles/img/img32.jpg';


export default class Photos extends React.Component {
  constructor(props){
    super(props)
    this.scroll = this.scroll.bind(this)
  }


  scroll(direction){
    let far = $( '.image-container' ).width()/2*direction;
    let pos = $('.image-container').scrollLeft() + far;
    $('.image-container').animate( { scrollLeft: pos }, 1000)
  }

  render() {

    return <div className="main">
      <div id="my-photos">
        <h1 className="title" style={{fontSize:2.5+"em",fontFamily:"monospace", marginBottom:4+"em", marginTop:4+"em"}}>
          One of my passions is photography, here are some of my photos. Have a good time!
        </h1>
        <div className="wrapper">
          <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>

          <div className="image-container" >
            <div className="image">
              <img src={img1} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img2} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img3} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img4} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img5} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img6} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img7} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img8} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img9} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img10} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img11} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img12} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img13} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img14} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img15} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img16} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img17} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img18} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img19} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img20} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img21} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img22} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img23} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img24} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img25} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img26} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img27} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img28} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img29} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img30} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img31} alt="Landscape" ></img>
            </div>
            <div className="image">
              <img src={img32} alt="Landscape" ></img>
            </div>

          </div>
          <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
        </div>

      </div>
    </div>
  }
}
