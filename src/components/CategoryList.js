import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';
import Categories from './Categories';
import Header from './Header';
import Input from './Input';
function CategoryList() {
  return (
    <div className="App">
      <Header />
      <Input />
      <main className="main__container">
        <h2 className="main__artist--title">ARTISTS</h2>
        <article className="category__article">
          <Link to="/detail">
            <div className="category__container">
              <h3 className="category__author title">Autor</h3>
              {/* <img className="main__artist--img" src="https://aws.traveler.es/prod/designs/v1/assets/2000x1331/163536.jpg" title="VISION" alt="VISION" /> */}

              <p className="category__text text">Las ideas que comunica un texto están contenidas en lo que se suele denominar «macroproposiciones», unidades estructurales de nivel. </p>
            </div>
          </Link>
          {/* ///// */}
          <div className="category__container">
            <h3 className="category__author title">Autor</h3>
            {/* <img className="main__artist--img" src="https://aws.traveler.es/prod/designs/v1/assets/2000x1331/163536.jpg" title="VISION" alt="VISION" /> */}

            <p className="category__text text">Las ideas que comunica un texto están contenidas en lo que se suele denominar «macroproposiciones», unidades estructurales de nivel. </p>
          </div>
          <div className="category__container">
            <h3 className="category__author title">Autor</h3>
            {/* <img className="main__artist--img" src="https://aws.traveler.es/prod/designs/v1/assets/2000x1331/163536.jpg" title="VISION" alt="VISION" /> */}

            <p className="category__text text">Las ideas que comunica un texto están contenidas en lo que se suele denominar «macroproposiciones», unidades estructurales de nivel. </p>
          </div>
          <div className="category__container">
            <h3 className="category__author title">Autor</h3>
            {/* <img className="main__artist--img" src="https://aws.traveler.es/prod/designs/v1/assets/2000x1331/163536.jpg" title="VISION" alt="VISION" /> */}

            <p className="category__text text">Las ideas que comunica un texto están contenidas en lo que se suele denominar «macroproposiciones», unidades estructurales de nivel. </p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default CategoryList;
