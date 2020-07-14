import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick'
import LightSwitch from './components/LightSwitch'
ReactDOM.render(
  <div>
    Mount Components Here
    <ClickityClick />
    <LightSwitch />
  </div>,
  document.getElementById('root')
);
