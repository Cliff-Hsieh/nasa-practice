import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import App from './app/App.js'; // import the main app component

import './assets/stylesheets/styles.scss';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
); // render our App component and mount it to our #root element
