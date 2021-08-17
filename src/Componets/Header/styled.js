import styled from "styled-components";

export const TopHeader = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1em;
        background:  ${props => props.theme.colors.background} ;
        color: ${props => props.theme.colors.color};
       
        a{
                display: flex;
                align-items: center;
                color: ${props => props.theme.colors.color};
                
                &:hover{
                        transform: translateY(-3px);
                        opacity: 0.5;
                }
        }
`