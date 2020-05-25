import React from 'react';

function Input() {
  return (
    <form className="form__container">
      <input className="form__input" type="text" placeholder="Search by artist, movement, ..."></input>
      <i class="fas fa-search form__input--icon"></i>
    </form>
  );
}

export default Input;
