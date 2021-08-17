import { SingIn, Box, Input ,Btn } from "./styled"

export default function Login() {
    
        return (
        
        <SingIn>
    
            <Box>
                    <h2>Login </h2>

                    
                        <label>Email</label>
                        <Input>
                        <input type="email" />
                        </Input>
                        <label>Password</label>
                        <Input>
                        <input type="password"/>
                        </Input>
                        <Btn>Login</Btn>  

            </Box>
      
       </SingIn>
    )
  
}
