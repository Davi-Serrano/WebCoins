import { useState } from "react";
import { useCoins } from "../../Context/Coins";
import { NavCoins, SearchBar ,Table, CoinName, CoinSymbol } from "./style"

export default function Coins() {

    const { coins } = useCoins()
    const [ search, setSeacrh ] = useState(coins)

   
    
    const handleChange = e => {
        setSeacrh(e.target.value.toLowerCase())
    }

    const filtredCoins = coins.filter( coin =>
        coin.name.toLowerCase().includes(search)
        )
    return (
        <NavCoins>
           <SearchBar>
               <input type="text" placeholder="Search" onChange={handleChange}/>
           </SearchBar>
           {filtredCoins.map(coin => {

               return(
                   <Table key={coin.id}>
                    
                    <CoinName>
                        <img src={coin.image} height="60px" width="60px"/>
                        {coin.name}
                    </CoinName>

                    <CoinName>
                        {coin.symbol.toUpperCase()}
                    </CoinName>

                    <CoinName>{}
                        R${coin.current_price.toFixed(2)}
                    </CoinName>

                    {coin.price_change_percentage_24h.toFixed(2) > 0 ? (
                            <div className="green">{coin.price_change_percentage_24h.toFixed(2)}</div>
                        ):(
                            <div className="red"> {coin.price_change_percentage_24h.toFixed(2)}</div>
                        )}

                    <CoinName>
                        <div className="hide">
                            {coin.market_cap.toLocaleString()}
                        </div>
                    </CoinName>

                    <CoinName>
                    <div className="hide">
                        {coin.total_volume}
                    </div>
                    </CoinName>

                    </Table>
               )
           })}
        </NavCoins>
    )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                