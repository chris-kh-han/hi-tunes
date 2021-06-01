import styled from "styled-components"

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: auto;
    
`

export const Section = styled.div`
    display: flex;
    justify-content: center;
    
`

export const Button = styled.a`
    padding: 1rem 3rem;
    border: 0;
    background-color: #1DA1F2;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    margin: 2rem 0.2rem;
    transition: all 500ms ease-in-out;
    transform: translateY(0);
    
    &:hover, &:active, &:focus {
        filter: brightness(0.8);
        transform: translateY(-5px);
    }
`

export const Button2 = styled(Button)`
    background-color: #4267B2;
` 

export const Copyright = styled.div`
    display: flex;
    background-color: #000;
    color: #fff;
        
    h6 {
        margin-left: 1.5rem;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        h6 {
            margin: .5rem auto;
        }
    }
`