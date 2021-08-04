import { useState, createContext, useContext} from "react"

export const ThemePageContext = createContext();

export default function ThemePageProvider({ children }){


    const [ Theme, setTheme ] = useState("ligth");

    return(

        <ThemePageContext.Provider
        value={{
            Theme,
            setTheme
        }}
        >      
            {children}    
        
         </ThemePageContext.Provider>

    )
}

export function useThemePage(){
    const context = useContext(ThemePageContext)
    const { Theme, setTheme }  = context ;

    return  { Theme, setTheme};
}