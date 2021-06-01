import React from 'react'

import { Container, Div } from './styles/Special'

export default function Special({ children }) {
    return <Container>{children}</Container>
}


Special.Div = function SpecialDiv({ children }) {
    return <Div>{children}</Div>
}
