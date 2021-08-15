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
        border: 1px solid red;
        height: 80px;
`

export const Coins = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;

        border: 1px solid red;

        width: 150px;
        height: 80px;
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