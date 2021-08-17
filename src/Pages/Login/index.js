import { useState } from "react"
import { SingIn, Box, Input ,Btn, Error } from "./styled"

export default function Login() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleSingin (){

        const savedEmail = localStorage.getItem("@Webcoin: Email")
        const savedPassword = localStorage.getItem("@Webcoin: Password")

        if(savedEmail){
             if(email === savedEmail && password === savedPassword){
            localStorage.setItem("@Webcoins: log", "yes")
                            
            }else{
                setError("Email ou senha incorreto")
                        }
        }else{       
            setError("Usuário não encontrado por favor de cadastre")
        }//Verificação
            
    }//Login
        return (

        <SingIn>
            <Box>
                    <h2>Login </h2>

                    
                        <label>Email</label>
                        <Input>
                        <input type="email" onChange={(e) =>setEmail(e.target.value)}/>
                        </Input>
                        <label>Password</label>
                        <Input>
                        <input type="password" onChange={(e) =>setPassword(e.target.value)}/>
                        </Input>
                        <Error>{error}</Error>
                        <Btn onClick={handleSingin}>Login</Btn>
                        <Btn ><a href="/register"> Register</a></Btn>   

            </Box>
       </SingIn>
    )
  
}
