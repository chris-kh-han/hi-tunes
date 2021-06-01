import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1AE68C;
    color: #000;
    
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 1.5rem auto;
    
    a {
        text-decoration: none;
        display: inline-block;
        padding: 1px 20px;
        border-radius: 1.2em;
        background-color: #fff;
        color: #000;

        &:hover, &:active, &:focus {
            transform: scale(1.1,1.1)
        }
    }

    a > p {
        font-weight: bold;
    }    

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
        margin: 3rem auto 2rem;
    }
`

export const Title = styled.h2`
    
`

export const SubSection = styled(Section)`
    flex-direction: row;
    justify-content: center;
    margin: auto 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
    
`

export const Phone = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem 3rem;
`

export const Email = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem 3rem;
`

export const Info = styled.div`
    
 
    
        flex-direction: column;

        h2 {
            line-height: 40px;
            text-align: center;
            
        }

        ol {
            text-align: left;
            line-height: 30px;
            
            
        }
    
`