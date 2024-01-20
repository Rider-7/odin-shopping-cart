import React from 'react';
import ReactDOM from 'react-dom/client';

// Components being tested
import Router from './components/Router/Router';
import ButtonTests from './components/Button/Button.test';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
