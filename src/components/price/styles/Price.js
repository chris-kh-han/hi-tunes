import styled from 'styled-components'

export const PriceDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    @media screen and (max-width: 768px) {
        padding-top: 1.5rem;
    }
`

export const Reservation = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        text-align: center;
    }

    h6 {
        margin: 1rem 1.5rem;
        text-align: left;
    }
    

    @media screen and (max-width: 768px) {
        h2 {
            text-align:left;
            margin-left: 1.5rem;
        }
    }
`


export const Table  = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #03051F;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        background-color: #fff;
    }
`

export const SubTable  = styled.div`
    /* width: 100%;
    box-sizing: border-box;
    border: 1px solid #03051F; */
    background-color: #03051F;
    color: #fff;
    display: flex;
    flex-direction: column;
    margin: 1.5rem;
    border: 1px solid #fff;
    

    h2, h5, h6 {
        margin: .5em 0;
        text-align: center;
        padding: 0 1em;
    }

    h5 {
        line-height: 1.5em;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        
    }
`

export const SongSelection = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        text-align: center;
    }

    h6 {
        margin: 1rem 1.5rem;
        text-align: left;
    }

    @media screen and (max-width: 768px) {
        h2 {
            text-align: left;
            margin-left: 1.5rem;
        }

    }
`

