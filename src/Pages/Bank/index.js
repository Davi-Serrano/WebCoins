import React, { useEffect, useState } from 'react'

export default function Bank() {

    const [bank, setBank ] = useState([])

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


    return (
        <div>
            <h1>Eu sou o Bank</h1>
            {bank.map((coin)=>{
                return (

            <ul>
                <li>{coin}</li>
            </ul>
                )
            } )}
            
        </div>
    )
}
