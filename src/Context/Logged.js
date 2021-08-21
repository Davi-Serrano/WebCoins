import { useState, createContext, useContext} from "react"

export const LoggedContext = createContext();

export default function LoggedProvider({ children }){


    const [ logged, setLogged ] = useState( ()=> {
   
        const auth = localStorage.getItem("@Webcoins: log")
        
        if(auth){
            return auth
        }
            return "no"
    })

    return(

        <LoggedContext.Provider
        value={{
            logged,
            setLogged
        }}
        > 
            
            {children}    
        
         </LoggedContext.Provider>

    )
}

export function useLogged(){
    const context = useContext(LoggedContext)
    const { logged, setLogged }  = context ;

    return  { logged, setLogged };
}