import { SingIn, Box, Input ,Btn } from "./styled"

export default function Register() {
    
        return (
        
        <SingIn>
    
            <Box>
                    <h2>Register </h2>

                    
                        <label>Email</label>
                        <Input>
                        <input type="email" />
                        </Input>
                        <label>Password</label>
                        <Input>
                        <input type="password"/>
                        </Input>
                        <label>Password</label>
                        <Input>
                        <input type="password"/>
                        </Input>
                        <Btn>Register</Btn>  

            </Box>
      
       </SingIn>
    )
  
}
