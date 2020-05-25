import React from 'react';
import img from '../images/vision-logo.png';
import { Link, Route, Switch } from 'react-router-dom';
function Header() {
  return (
    <header className="header__container">
      <div>
        <Link to="/asdasd">
          <div className="header__btn--menu"></div>
        </Link>
        <Link to="/asdasd">
          <div className="header__btn--return"></div>
        </Link>
      </div>

      <img src={img} title="VISION" alt="VISION" className="header__logo" />
    </header>
  );
}

export default Header;
