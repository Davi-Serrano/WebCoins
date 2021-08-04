import styled from "styled-components";

export const NavCoins = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
`

export const SearchBar = styled.div`
        margin: 1em 0;

 

` 

export const Table = styled.div `
        display: flex;
        justify-content: start;
        align-items: center;
        border-bottom: 1px solid red;
        width: 80%;

        .red{
                color:red;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right:80px ;
                width: 10%;
        }
        .green{
                color: green;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right:80px ;
                width: 10%;
        }


        

`
export const CoinName = styled.div `
        img{
                margin:10px;    
        }

        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:80px ;
        width: 10%;
        
        @media (max-width: 850px){
               .hide{
                display: none;
               }
        }
`
