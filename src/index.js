import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CategoryList from './components/CategoryList';
import { HashRouter } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Article from './components/Article';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={App} />
      <Route path="/artists" component={CategoryList} />
      <Route path="/item" component={CategoryList} />
      <Route exact path="/detail" component={Article} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
