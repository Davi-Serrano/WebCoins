import React, { useEffect, useState } from 'react'
import { Mybank, Section, List, Coins, Wallet, Balance, BalanIcon ,Informations, Options ,FlashMessage} from './styled'
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";


import { Bar } from 'react-chartjs-2';

export default function Bank() {

    const [bank, setBank ] = useState([])
    const [flash, setFlash] = useState("none")
    const [hideBalance, setHideBalance] = useState("10")
    const [graphColor, setGraphColor] = useState("#00FF00")
    const [graphDatas, setGraphDatas] = useState([])
    const [graphNames, setGraphNames] = useState([]) 
    const [graphTitle, setGraphTitle] = useState("Valor")
    const User = localStorage.getItem("@Webcoin: User")

    const data = {
        labels: graphNames,
        datasets: [
          {
            label: graphTitle,
            data: graphDatas,
            backgroundColor: graphColor,
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

     const getBank = () =>{
    
         const Itens = localStorage.getItem("@Coins")
         const item = JSON.parse(Itens)

      if(Itens){
          setBank(item)
          const names = item.map(coin=> coin.name)
          setGraphNames(names)
          const values = item.map(coin=> coin.current_price)
          setGraphDatas(values)
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
        setFlash("flex")
        setTimeout(() => {
            setFlash("none")
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
                         
                         <BalanIcon display={hideBalance === "0" ? "none" : "block"}>   <BsFillEyeSlashFill size={25} onClick={()=> hideBalance === "0" ? setHideBalance("10"): setHideBalance("0") } /> </BalanIcon>
                         
                         <BalanIcon display={hideBalance === "0" ? "block" : "none"}>    <BsFillEyeFill size={25} onClick={()=> hideBalance === "0" ? setHideBalance("10"): setHideBalance("0") } />  </BalanIcon>
                    </div>      
                </div>
                
                <Informations><h3>  Moedas: {graphTitle}</h3>
               
                <Bar data={data} options={options} />
                
                <Options>
                    <div className="box value" onClick={()=> {setGraphColor("#00FF00")
                                                            setGraphTitle("Valor")
                                                            const values = bank.map(coin=> coin.current_price)
                                                            setGraphDatas(values)
                                                        }}>
                        Valor
                    </div>
                    <div className="box liquid" onClick={()=> { 
                                                    setGraphColor("#0000CD")
                                                    setGraphTitle("Liquidez")
                                                    const values = bank.map(coin=> coin.total_volume)
                                                    setGraphDatas(values)
                                                }}>
                        Liquidez
                    </div>
                    <div className="box variations"  onClick={()=> { 
                                                    setGraphColor("#FF4500")
                                                    setGraphTitle("Variação 24h")
                                                    const values = bank.map(coin=> coin.price_change_24h)
                                                    setGraphDatas(values)
                                                }}>
                        Variação 24h
                    </div>
                </Options>
                </Informations>

            </Wallet>

        </Mybank>

    )
}
