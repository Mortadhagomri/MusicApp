import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AudioProvider from './context/AudioContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <AudioProvider>
      <App />
    </AudioProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


