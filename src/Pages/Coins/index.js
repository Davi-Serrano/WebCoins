import { useState, useEffect } from "react";
import { useCoins } from "../../Context/Coins";
import { NavCoins, SearchBar ,Table, CoinName, FlashMessage } from "./style"
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Coins() {

    const { coins } = useCoins() //Api
    const [flash, SetFlash] = useState("none")

    const  [bank, setBank]  = useState(()=>{

        const storageBank = localStorage.getItem("@Coins")

        if(storageBank){
            return JSON.parse(storageBank)
        }else{
            return [];
        }
    }) //Pega dados do Bank se existir

    const [ search, setSeacrh ] = useState(coins) //Barra de Pesquisa
    
    const handleChange = e => {
        setSeacrh(e.target.value.toLowerCase())
    }//Coloca valor do input no search e Lower Case

    const filtredCoins = coins.filter( coin =>
        coin.name.toLowerCase().includes(search)
        ) //Filtra as moedas
        
        useEffect(() => {
            localStorage.setItem("@Coins", JSON.stringify(bank));
            
        }, [bank])//Salva o bank
        
        const flashMessage = () =>{
            SetFlash("flex")
            setTimeout(() => {
                SetFlash("none")
            }, 1000);
        } 
    return (
        <NavCoins>
            <FlashMessage display={flash}>
                Adicionado com sucesso
            </FlashMessage>
           <SearchBar>
               <input type="text" placeholder="Search" onChange={handleChange}/>
           </SearchBar>
           {filtredCoins.map(coin => {

               return(
                   <Table key={coin.id}>
                    
                    <CoinName>
                        <img src={coin.image} alt="IconCoin" height="60px" width="60px"/>
                        <div className="hide">
                        {coin.name}
                        </div>
                    </CoinName>

                    <CoinName onClick={()=> {
                        setBank([...bank, coin])
                        flashMessage()
                                }
                        }>
                        <AiOutlinePlusCircle size={25}/>
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                