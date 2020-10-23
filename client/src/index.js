import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import movies from './data/movieData.js';

ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));