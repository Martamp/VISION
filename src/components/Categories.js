import React from 'react';
import '../stylesheets/index.scss';
import { Link, Route, Switch } from 'react-router-dom';
import Item from './Item';
import Movement from './Movement';
function Categories() {
  return (
    <>
      <Link to="/artists">
        <div className="main__artist--head">
          <h2 className="main__artist--title">ARTISTS</h2>
          <i class="fas fa-plus main__artist--icon"></i>
        </div>
      </Link>
      <article className="main__article">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item /> <Item />
        <Item /> <Item />
        <Item />
      </article>
    </>
  );
}

export default Categories;
