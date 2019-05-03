import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//Styling
import './css/index.css';
import './css/grid.css';
// Components
import App from './App.js';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

