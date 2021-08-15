import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import CoinsProvider from "./Context/Coins";
import BankProvider from './Context/Bank';
import ThemePageProvider from "./Context/themePage"

ReactDOM.render(
  <React.StrictMode>
        <CoinsProvider>
          <BankProvider>
          <ThemePageProvider>
             <App />
          </ThemePageProvider>
          </BankProvider>
        </CoinsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

