import React from 'react'

import { Section, Container } from './styles/Faq'

export default function Faq({children}) {
    return <Section>{children}</Section>
}

Faq.Container = function FaqContainer({children}) {
    return <Container>{children}</Container>
}

