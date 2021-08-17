import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CoinsProvider from "./Context/Coins";
import ThemePageProvider from "./Context/themePage"


ReactDOM.render(
  <React.StrictMode>
        <CoinsProvider>
          <ThemePageProvider>
             <App />
          </ThemePageProvider>
        </CoinsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

