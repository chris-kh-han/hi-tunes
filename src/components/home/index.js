import React from 'react'

import { HomeDiv, Container, Wrapper, Nav, BG} from './styles/home'


export default function Home({ children, ...restProps }) {
    return <HomeDiv {...restProps}>{children}</HomeDiv>
}

Home.Container = function HomeContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Home.Wrapper = function HomeWrapper({ children, ...restProps}) {
    return <Wrapper>{children}</Wrapper>
}

Home.BG = function HomeBG({ children }) {
    return <BG>{children}</BG>
}