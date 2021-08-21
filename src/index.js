import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CoinsProvider from "./Context/Coins";
import ThemePageProvider from "./Context/themePage"
import LogedProvider from "./Context/Loged"


ReactDOM.render(
  <React.StrictMode>
        <CoinsProvider>
          <ThemePageProvider>
            <LogedProvider>
             <App />
            </LogedProvider>
          </ThemePageProvider>
        </CoinsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

