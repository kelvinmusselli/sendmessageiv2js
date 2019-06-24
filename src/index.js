import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/ContactsList/ContactsList';
import Auth from './components/Auth/Auth';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  localStorage.getItem('password') ? <App /> : <Auth />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
