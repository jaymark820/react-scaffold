import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import './common/style.css';

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  </HashRouter>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
