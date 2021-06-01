import React from 'react'

import { Container } from './styles/Location'


export default function Location({ children, ...restProps }) {
    console.log(children);
    return <Container {...restProps}>{children}</Container>
}
