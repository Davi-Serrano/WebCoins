import React, { useEffect, useState } from 'react'
import { Mybank, Section, List, Coins, Wallet} from './styled'
import { AiOutlineMinusCircle } from "react-icons/ai";




export default function Bank() {

    const [bank, setBank ] = useState([])

     const getBank = () =>{
      const Itens = localStorage.getItem("@Coins")

      if(Itens){

          const item = JSON.parse(Itens)
          setBank(item)
        }
    }

    
    function getTotal(total, item) {
        return total + item.current_price
    }
    var total = bank.reduce(getTotal, 0);

    useEffect(()=>{
        getBank()

    }, [])


    return (
        <Mybank>
            <Section>
                {bank.map((coin, remove)=>{
                    return (

                <List key={coin.id}>
                    <img src={coin.image} alt="CoinIcon" width='50px'/>
                    <Coins onClick={ ()=>{
                        bank.splice(remove, 1)
                        localStorage.setItem("@Coins", JSON.stringify(bank));
                        getBank()
                    }}
                    > <AiOutlineMinusCircle size={25}/></Coins>
                    <Coins>{coin.name}</Coins>
                    <Coins>R${coin.current_price.toFixed(2)}</Coins>
                </List>
                    )
                } )}
                
            </Section>

            <Wallet>
                <div className="title">
                    <h3>Usuário</h3>
                    <h3>Saldo: R${total.toFixed(2)}</h3>
                </div>
                
            </Wallet>

        </Mybank>

    )
}
