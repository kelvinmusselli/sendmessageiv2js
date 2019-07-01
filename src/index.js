import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { verifyAndUpdate } from './helpers/app';
import './index.scss';

ReactDOM.render(<Routes />, document.getElementById('root'));

// verify update avaiable
verifyAndUpdate();