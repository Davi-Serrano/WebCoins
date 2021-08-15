import styled from "styled-components";

export const Mybank = styled.div`
        display:flex;
        justify-content: space-around;
        align-items: flex-start;

        margin-top: 3em;
`

export const Section = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`
export const List = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid ${props => props.theme.colors.background};;
        height: 80px;
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
`

export const Wallet = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        border: 1px solid red;

        width: 40%;
        height: 200px;

        padding: 1em;

        .title{
            width: 100%;
            display:flex;
            justify-content: space-between;
            align-items: center;
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