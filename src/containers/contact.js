import React from "react";

import { Contact } from "../components";

export default function ContactContainer() {
  return (
    <Contact>
      <Contact.Section>
        <Contact.Title>HOW TO CONTACT US</Contact.Title>
        <Contact.SubSection>
        <Contact.Phone>
          <h4>Call or Text</h4>
          <a href="tel:5124540911">
            <p>512 454 0911123</p>
          </a>
        </Contact.Phone>

        <Contact.Email>
          <h4>Email</h4>
          <a href="mailto:hituneskaraoke@gmail.com">
            <p>hituneskaraoke@gmail.com</p>
          </a>
        </Contact.Email>
        </Contact.SubSection>
        

        <Contact.Info>
        <h2>PLEASE LEAVE US <br />
        VOICEMAIL/TEXT/EMAIL WITH</h2>
        <ol>
          <li>Your Name</li>
          <li>Reservation Date</li>
          <li>Start time/End time</li>
          <li>Number of People in Your Party</li>
          <li>Your Contact Phone Number</li>
          <li>
            And Tell Us About What Your Party Is For So We Can Assist You Better
          </li>
        </ol>
      </Contact.Info>
      </Contact.Section>

      
    </Contact>
  );
}
