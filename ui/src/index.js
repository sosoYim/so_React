import './styles/main.css';
import { StrictMode } from 'react';
import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
