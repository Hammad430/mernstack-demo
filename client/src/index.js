import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Carousel from './Carousel';
import addRate from './addRate';
import showRate from './showRate';
import sell from './sell';
import buy from './buy';
import graph from './graph';
import * as serviceWorker from './serviceWorker';
import LogRocket from 'logrocket';
LogRocket.init('xtdmy1/poultryapp');



ReactDOM.render(
  <Router>
      <div>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Carousel} />
        <Route exact path="/sell" component={sell} />
        <Route exact path="/buy" component={buy} />
        <Route exact path="/addRate" component={addRate} />
        <Route exact path="/showRate" component={showRate} />
        <Route exact path="/graph" component={graph} />
      </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
