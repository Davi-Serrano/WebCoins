import {useEffect} from "react"
import axios from "axios"
import { useCoins } from "./Context/Coins.js";
import Coins from "./Pages/Coins/index.js";
import Header from "./Componets/Header/index.js"; 
import  GlobalStyle from "./Style/globalStyle";

function App() {
  
  const { setCoins } = useCoins()

  useEffect( ()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then( res => {
                setCoins(res.data)   
        })
        .catch( error => console.log(error)
)}, []);
  
  return (

    <div className="App">
      <Header />
      <Coins /> 
      <GlobalStyle />                   
    </div>
    
  );
}

export default App;
