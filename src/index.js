import React from 'react';
import ReactDOM from 'react-dom';
import { getUrlToken } from './helper';
import App from './components/ContactsList/ContactsList';
import * as serviceWorker from './serviceWorker';
import './index.css';

const token = '4E7D4ADEEBE5318A8AFF52EF8FD31E2E8A6FA86986A968D06E5722E73AA67039';

ReactDOM.render(
  getUrlToken() === token ? <App /> : <h3><center>Você não tem acesso</center></h3>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
