import React from "react"

import { Container, Section, Button, Button2, Copyright } from "./styles/footer"

export default function Footer({ children }) {
    return <Container>{children}</Container>
}

Footer.Section = function FooterSection({ children }) {
    return <Section>{children}</Section>
}

Footer.Button = function FooterButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

Footer.Button2 = function ({ children, ...restProps }) {
    return <Button2 {...restProps}>{children}</Button2>
}

Footer.Copyright = function FooterCopyright({ children }) {
    return <Copyright>{children}</Copyright>
}

