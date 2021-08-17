import { useState, createContext, useContext} from "react"

export const UserContext = createContext();

export default function UserProvider({ children }){


    const [ user, setUser ] = useState(false);

    return(

        <UserContext.Provider
        value={{
            user,
            setUser
        }}
        > 
            
            {children}    
        
         </UserContext.Provider>

    )
}

export function useCoins(){
    const context = useContext(UserContext)
    const { user, setUser }  = context ;

    return  { user, setUser };
}