import { useState } from "react";
import { useCoins } from "../../Context/Coins";
import { NavCoins, SearchBar ,Table } from "./style"

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

                    <img src={coin.image} height="60px"/>
                    {coin.name}

                    {coin.symbol.toUpperCase()}

                    {coin.current_price.toFixed(2)}


                    {coin.market_cap.toLocaleString()}

                    </Table>
               )
           })}
        </NavCoins>
    )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                