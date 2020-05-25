import React from 'react';
import '../stylesheets/index.scss';
import MovItem from '../components/MovItem';
function Movement() {
  return (
    <>
      <div className="main__artist--head">
        <h2 className="main__artist--title">MOVEMENTS</h2>
        <i class="fas fa-plus main__artist--icon"></i>
      </div>
      <article className="main__article">
        <MovItem />
        <MovItem />
        <MovItem />
        <MovItem />
        <MovItem />
        <MovItem />
      </article>
    </>
  );
}

export default Movement;
