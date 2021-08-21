import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CoinsProvider from "./Context/Coins";
import ThemePageProvider from "./Context/themePage"
import LoggedProvider from "./Context/Logged"


ReactDOM.render(
  <React.StrictMode>
        <CoinsProvider>
          <ThemePageProvider>
            <LoggedProvider>
             <App />
            </LoggedProvider>
          </ThemePageProvider>
        </CoinsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

