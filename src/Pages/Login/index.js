import { useState } from "react"
import { Redirect } from "react-router"
import { useUser } from "../../Context/User.js"
import { SingIn, Box, Input ,Btn } from "./styled"

export default function Login() {
    
    const { user, setUser } = useUser()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSingin (){

        const savedEmail = localStorage.getItem("@Webcoin: Email")
        const savedPassword = localStorage.getItem("@Webcoin: Password")

        if(savedEmail){
                        if(email === savedEmail && password === savedPassword){
                            setUser(true)
                            
                        }else{
                            console.log("Usuário ou senha incorreto")
                        }
        }else{
        
            console.log("Não encontrado")
        }
            
    }
    console.log(user)

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
                        <Btn onClick={handleSingin}>Login</Btn>
                        <Btn ><a href="/register"> Register</a></Btn>   

            </Box>
      
       </SingIn>
    )
  
}
