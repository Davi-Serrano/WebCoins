import {useEffect} from "react"
import axios from "axios"

import { useCoins } from "./Context/Coins.js";

import { ThemeProvider } from "styled-components";
import { useThemePage } from "./Context/themePage";

import {  lightTheme, darkTheme} from "./Style/theme"
import  GlobalStyle from "./Style/globalStyle";

import Header from "./Componets/Header/index.js";

import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes/index.js";


function App() {
  
  const { setCoins } = useCoins()
  const { Theme } = useThemePage()

  useEffect( ()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then( res => {
                setCoins(res.data)   
        })
        .catch( error => console.log(error)
        
)}, []);
        
  
  
  return (
    
    <ThemeProvider theme={Theme === "ligth" ? lightTheme : darkTheme}>   
    <BrowserRouter>

        <Header />
        < Routes />
        <GlobalStyle />                   

    </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
