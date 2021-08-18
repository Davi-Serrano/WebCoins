import { useState } from "react"
import { SingIn, Box, Input ,Btn, Error } from "./styled"

export default function Register() {

    const [user, setUser] = useState("")
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
        //Verificação de dados

        localStorage.setItem("@Webcoin: Email", email)
        localStorage.setItem("@Webcoin: User", user)
        localStorage.setItem("@Webcoin: Password", password)


    }//Registra usuário


        return (
        
        <SingIn>
    
            <Box>
                    <h2>Register </h2>

                        <label>Usuário</label>
                        <Input>
                        <input type="text" onChange={ (e) => setUser(e.target.value)}/>
                        </Input>
                        <label>Email</label>
                        <Input>
                        <input type="email" min="6" max="20" onChange={ (e) => setEmail(e.target.value)}/>
                        </Input>
                        <label>Password</label>
                        <Input>
                        <input type="password" min="6" onChange={ (e) => setPassword(e.target.value)}/>
                        </Input>
                        <label>Password</label>
                        <Input>
                        <input type="password" min="5" nChange={ (e) => setPassword2(e.target.value)}/>
                        </Input>
                        <Error>  {error} </Error>
                        <Btn onClick={handleRegister}>Register</Btn>
                       

            </Box>
      
       </SingIn>
    )
  
}
