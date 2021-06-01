import React from "react"

import { Container, Section, Title, SubSection, Phone, Email, Info } from "./styles/contact"

export default function Contact({ children }) {
    return <Container>{children}</Container>
}

Contact.Section = function ({ children }) {
    return <Section>{children}</Section>
}

Contact.Title = function ({ children }) {
    return <Title>{children}</Title>
}

Contact.SubSection = function ({ children }) {
    return <SubSection>{children}</SubSection>
}

Contact.Phone = function ({ children }) {
    return <Phone>{children}</Phone>
}

Contact.Email = function ({ children }) {
    return <Email>{children}</Email>
}

Contact.Info = function ({ children }) {
    return <Info>{children}</Info>
}

