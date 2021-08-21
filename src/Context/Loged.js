import { useState, createContext, useContext} from "react"

export const LogedContext = createContext();

export default function LogedProvider({ children }){


    const [ loged, setLoged ] = useState( ()=> {
   
        const auth = localStorage.getItem("@Webcoins: log")
        
        if(auth){
            return auth
        }
            return "no"
    })

    return(

        <LogedContext.Provider
        value={{
            loged,
            setLoged
        }}
        > 
            
            {children}    
        
         </LogedContext.Provider>

    )
}

export function useLoged(){
    const context = useContext(LogedContext)
    const { loged, setLoged }  = context ;

    return  { loged, setLoged };
}