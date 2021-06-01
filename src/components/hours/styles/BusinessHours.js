import styled from 'styled-components'

export const HoursDiv = styled.div`
    display: flex;
    flex-direction: column;
   
    
`

export const HoursTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 1em 1.5em;
    font-style: italic;
`

export const OpenHours = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 1.5rem;
    background-color: #000;
    color: #fff;
    transform: translateX(0);
    transition: .5s transform ease-in;


    h5:first-child {
        color: red;
    }

    &:hover {
        box-shadow: 5px 5px 20px 5px #01B33E;
        transform: translateX(-10px);
    }
`

export const Rules = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: red;

    h6 {
        margin: 1em 1.5rem;
    }
    
`

