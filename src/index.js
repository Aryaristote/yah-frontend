import './index.css';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
