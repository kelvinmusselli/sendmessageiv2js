import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/ContactsList/ContactsList';
import Auth from './components/Auth/Auth';
import './index.css';

ReactDOM.render(
  localStorage.getItem('password') ? <App /> : <Auth />,
  document.getElementById('root')
);