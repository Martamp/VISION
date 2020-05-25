import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';
import Categories from './Categories';
import Header from './Header';
import Input from './Input';
import Movement from './Movement';

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <main className="main__container">
        <Categories />
        <Movement />
        <Categories />
        <Categories />
      </main>
    </div>
  );
}

export default App;
