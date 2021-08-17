import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    html, body :root{
        min-height: 100%;
    }
    
    body{
        background: ${props => props.theme.colors.body};
        color: ${props => props.theme.colors.color};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

    }
    a{
        color: white;
        text-decoration: none;
    }
`;