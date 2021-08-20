import styled from "styled-components";

export const Mybank = styled.div`
        display:flex;
        justify-content: space-around;
        align-items: flex-start;

        margin-top: 3em;

        @media (max-width: 1200px){
                flex-direction: column-reverse;
                align-items: center;
        }
`

export const Section = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        
        @media (max-width: 1200px){
                margin: 2em 0;

                &::before{
                          content: "Suas de Moedas";
                          font-size: 25px;
                          font-weight: bold;

                  }
        }
`
export const List = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid ${props => props.theme.colors.background};
        height: 80px;

        
        @media (max-width: 800px){
                img{
                  display: none;
                }
        }
`

export const Coins = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;

        width: 150px;
        height: 80px;

           &:hover{
                cursor: pointer;
                transform: translateY(-3px);
                }
                
          @media (max-width: 1200px){
                  width: 100px;
          }        

`

export const Wallet = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        
        width: 40%;
        
        padding: 1em;
        
        background-color: ${props => props.theme.colors.background};
        border-radius: 2em;

        .title{
            width: 100%;
            display:flex;
            justify-content: space-between;
            align-items: center;
        }
        .info{
            display:flex;
            justify-content: flex-end;
            align-items: center;
        }
        
        @media (max-width: 1200px){
                width: 100%;
        }

`
export const Balance = styled.div`
        font-size: 22px;   
        opacity: ${(props) => props.opacity};;
`

export const Informations = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;   
        margin-top: 1em;
        width: 100%;
        
`
export const Options = styled.div`
        display:flex;
        justify-content: space-around;
        align-items: center;
        width: 80%;
        .box{
                display:flex;
                justify-content: space-around;
                align-items: center;
                height: 30px;
                padding: 1em;
                font-weight: bold;
                border: 2px solid ${props => props.theme.colors.color};
                border-radius: 5px;
                color:black;

                &:hover{
                cursor: pointer;
                transform: translateY(-3px);
                }
                
        }

        .value{
                background-color: #00FF00;
                &:hover{
                        opacity: 0.8;
                }
        }
        .liquid{
                background-color: #0000CD;
                &:hover{
                        opacity: 0.8;
                }
        }
        .variations{
                background-color: #FF4500;
                &:hover{
                        opacity: 0.8;
                }
        }

        
`

export const FlashMessage = styled.div`
        display: ${(props) => props.display};
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 0;
        width: 80%;
        height: 30px;

        background-color: red;
        color: white;
        
        border-radius: 5px;
        
        font-size: 25px;
        font-weight: bold;
`