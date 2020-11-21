import React from 'react';
import ReactDOM from 'react-dom';

import './css/bootstrap.css';
import './css/index.css';
import './css/font-awesome.min.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
