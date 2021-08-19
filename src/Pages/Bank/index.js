import React, { useEffect, useState } from 'react'
import { Mybank, Section, List, Coins, Wallet, Balance, Informations, Options ,FlashMessage} from './styled'
import { AiOutlineMinusCircle } from "react-icons/ai";

export default function Bank() {

    const [bank, setBank ] = useState([])
    const [flash, SetFlash] = useState("none")
    const [hideBalance, setHideBalance] = useState("10")
    const User = localStorage.getItem("@Webcoin: User")

     const getBank = () =>{
      const Itens = localStorage.getItem("@Coins")

      if(Itens){

          const item = JSON.parse(Itens)
          setBank(item)
        }
    }
    useEffect(()=>{
        getBank()    
    }, [])


    function getTotal(total, item) {
        return total + item.current_price
    }
    var total = bank.reduce(getTotal, 0);

    const flashMessage = () =>{
        SetFlash("flex")
        setTimeout(() => {
            SetFlash("none")
        }, 1000);
    }

    return (
        <Mybank>
            <FlashMessage display={flash}>
                Excluido com sucesso
            </FlashMessage>
            <Section>
                {bank.map((coin, remove)=>{
                    return (

                <List key={coin.id}>
                    <img src={coin.image} alt="CoinIcon" width='50px'/>
                  
                    <Coins onClick={ ()=>{
                        bank.splice(remove, 1)
                        localStorage.setItem("@Coins", JSON.stringify(bank));
                        getBank()
                        flashMessage()
                    }}
                    > <AiOutlineMinusCircle size={25}/>
                    </Coins>
                    
                    <Coins>{coin.name}</Coins>
                    <Coins>R${coin.current_price.toFixed(2)}</Coins>
                </List>
                    )
                } )}
                
            </Section>

            <Wallet>
                <div className="title">
                    <h3>Olá, {User} !</h3>
                    <div className="info">
                        <Balance opacity={hideBalance}>Saldo: R${total.toFixed(2) } </Balance>
                         <AiOutlineMinusCircle size={25} onClick={()=> hideBalance === "0" ? setHideBalance("10"): setHideBalance("0") }/>
                    </div>     
                </div>
                
                <Informations><h3>  Moedas </h3>
                
                
                <Options>
                    <div className="box value">
                        Valor
                    </div>
                    <div className="box liquid">
                        Liquidez
                    </div>
                    <div className="box variations">
                        Variações
                    </div>
                </Options>
                </Informations>

            </Wallet>

        </Mybank>

    )
}
