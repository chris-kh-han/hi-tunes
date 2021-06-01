import React from "react";

import ContactContainer from "containers/contact"
import NavContainer from "containers/nav"
import FooterContainer from "containers/footer"

export default function ContactPage() {
  return (
    <>
      <NavContainer />
      <ContactContainer/>
      <FooterContainer />
    </>
  );
}
