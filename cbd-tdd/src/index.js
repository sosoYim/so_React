import './styles/main.css';
import React from 'react';
import { IconButton } from './components';
import { render } from 'react-dom';

render(
  <>
    <IconButton />
    <IconButton state="pending" />
    <IconButton state="resolved" />
    <IconButton state="rejected" />
    <IconButton state="disabled" />
  </>,
  document.getElementById('root')
);
