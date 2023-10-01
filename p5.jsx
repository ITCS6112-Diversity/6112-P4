import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import Header from './components/header/Header';
import Example from './components/example/Example';
import States from './components/states/States';
import './styles/main.css';

ReactDOM.render(
  <div>
    <Header/>
    <HashRouter>
      <div className="navbar">
        <Link className="navbar-link" to="/example">Example</Link>
        <Link className="navbar-link" to="/states">States</Link>
      </div>
      <Route path="/states" component={States} />
      <Route path="/example" component={Example} />
    </HashRouter>
  </div>,
  
  document.getElementById('reactapp'),
);