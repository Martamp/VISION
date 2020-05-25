import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';
import Header from './Header';
import Input from './Input';

function Article() {
  return (
    <div className="App">
      <header className="header__container">
        <div>
          <Link to="/asdasd">
            <div className="header__btn--menu"></div>
          </Link>
          <Link to="/asdasd">
            <div className="header__btn--return"></div>
          </Link>
        </div>
      </header>
      <main className="main__container">
        <div className="article__background">{/* <img src="https://aws.traveler.es/prod/designs/v1/assets/2000x1331/163536.jpg" title="Artist" alt="Artist" /> */}</div>
        <div className="article__info">
          <i class="far fa-circle article__icon"></i>
          <i class="far fa-circle article__icon"></i>
          <i class="far fa-circle article__icon"></i>
          <h1 className="article__title">Obra o autor</h1>
          <h2 className="article__subtitle">Obra o fecha</h2>
          <p className="article__text">Para eliminar lo subrayado de un enlace: Haga clic en el icono Editar en el bloque que contiene el Enlace. En el panel izquierdo, haga clic en (ver codigo) Busque la dirección URL con el código y (después de un espacio) coloque esta etiqueta al lado: style="text-decoration: none"</p>
          <div className="article__tag--cont">
            <span className="article__tag">Tag</span>
            <span className="article__tag">Tagdcf</span>
            <span className="article__tag">Tag</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Article;
