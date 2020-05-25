import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';
import loader from '../images/logo-loader.png';
import logo from '../images/black-logo.png';

function Landing() {
  return (
    <>
      <Link to="/home">
        <div className="background">
          <div className="background__container">
            <img className="background__logo" src={logo} title="VISION" alt="VISION" />
            <img className="background__loader" src={loader} title="VISION" alt="VISION" />
          </div>
          <h3 className="background__text">Click anywhere</h3>
        </div>
      </Link>
    </>
  );
}

export default Landing;
