

import { useState } from "react";
import { useCoins } from "../../Context/Coins";

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
        <div>
           <form>
               <input type="text" placeholder="Search" onChange={handleChange}/>
           </form>
           {filtredCoins.map(coin => {

               return(
                   <div key={coin.id}>
                    {coin.name}
                    <img src={coin.image} />
                    {coin.current_price}
                    {coin.symbol}
                    {coin.market_cap.toLocaleString()}
                    </div>
               )
           })}
        </div>
    )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                