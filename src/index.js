import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./styles/index.scss";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import "jquery/dist/jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
          <React.Fragment>
            <Navbar/>
            <Footer/>
          </React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
