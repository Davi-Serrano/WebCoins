import { useState, createContext, useContext} from "react"

export const CoinsContext = createContext();

export default function CoinsProvider({ children }){


    const [ coins, setCoins ] = useState([]);

    return(

        <CoinsContext.Provider
        value={{
            coins,
            setCoins
        }}
        > 
            
            {children}    
        
         </CoinsContext.Provider>

    )
}

export function useCoins(){
    const context = useContext(CoinsContext)
    const { coins, setCoins }  = context ;

    return  { coins, setCoins };
}