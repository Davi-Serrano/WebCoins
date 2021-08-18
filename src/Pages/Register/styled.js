import styled from "styled-components";

export const SingIn = styled.div`

    background-image: url(https://i0.wp.com/www.zenvia.com/wp-content/uploads/2020/07/Cliente-Satisfeito.jpg?fit=1490%2C703&ssl=1);
    background-size: cover;
    height: 91.2vh;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 850px){
        background-image: url(https://fxtrending.com/wp-content/uploads/2020/01/cryptocurrency-metal-coins1.jpg);
        width: 100vw;
        }

`
export const Box = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
   
    background-color:${props => props.theme.colors.backgroundTwo};
    color: white;
    
    padding: 2em;
   
    height: 80%;
    width: 25%;
    h2{
        border-bottom: 1px solid white;
        margin-bottom: 1em;
        padding-bottom: 0.5em;
        width: 30%;
    }
    label{
        margin-left: 10%;
        font-size: 20px;
        font-weight: bold;
    }
    @media (max-width: 1300px){
        width: 70%;
        align-items: center;
    }
    @media (max-width: 850px){
        width: 100%;
        align-items: flex-start;
        margin-left:0 ;
    }

`
export const Input = styled.div`
    input{
        border: none;
        background: none;

        height: 25px;
        
        box-shadow: 0px 2px white;
        margin-bottom: 1em;
        
        font-weight: 700;
        font-size: 17px;
        color: white;
    }
`

export const Btn = styled.div`
    text-align: center;

    border-radius: 5px;
    background-color: ${props => props.theme.colors.button};
    color: white;
    
    margin-top: 1em;
    margin-left: 40%;
    padding: 0.3em;
    
    font-size: 25px;
    font-weight: 700;
   
    transition: 200ms transform;

        &:hover{
        cursor: pointer;
        background-color: ${props => props.theme.colors.backgroundTwo};
        transform: translateY(-4px);
    }
    @media (max-width: 1300px){
        margin: 0;
    }
    @media (max-width: 850px){
        margin-left: 40%;
    }

`

export const Error = styled.div`

        display: flex;
        justify-content: center;
        font-size: 25px;
        color: #ff2400;
        font-weight: bold;
`