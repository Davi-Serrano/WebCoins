import styled from "styled-components";

export const SingIn = styled.div`

    background-image: url(https://i0.wp.com/www.zenvia.com/wp-content/uploads/2020/07/Cliente-Satisfeito.jpg?fit=1490%2C703&ssl=1);
    height: 91.2vh;
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

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
        font-size: 20px;
        font-weight: bold;
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
`