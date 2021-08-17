import { useState } from "react"
import { SingIn, Box, Input ,Btn, Error } from "./styled"

export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState("")

    function handleRegister(){

        if(!email || !password || !password2){
            setError("Por favor preencha todos os campos")
        }
        if(password !== password2){
            setError("As senhas são diferentes")
        }
        if(password.length < 5){
            setError("Senha muito curta")
        }
        localStorage.setItem("@Webcoin: Email", email)
        localStorage.setItem("@Webcoin: Password", password)
    }


        return (
        
        <SingIn>
    
            <Box>
                    <h2>Register </h2>

                    
                        <label>Email</label>
                        <Input>
                        <input type="email" onChange={ (e) => setEmail(e.target.value)}/>
                        </Input>
                        <label>Password</label>
                        <Input>
                        <input type="password" onChange={ (e) => setPassword(e.target.value)}/>
                        </Input>
                        <label>Password</label>
                        <Input>
                        <input type="password" onChange={ (e) => setPassword2(e.target.value)}/>
                        </Input>
                        <Error>  {error} </Error>
                        <Btn onClick={handleRegister}>Register</Btn>
                       

            </Box>
      
       </SingIn>
    )
  
}
