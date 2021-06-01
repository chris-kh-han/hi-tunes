import React from "react";
import { FaTwitter, FaFacebookSquare, FaCopyright } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

import { Footer } from "../components";

export default function FooterContainer() {
  return (
   
      <Footer>
        <Footer.Section>

          <Footer.Button
            href="https://twitter.com/hituneskaraoke"
            target="_blank"
          >
            <FaTwitter />
          </Footer.Button>
          <Footer.Button2
            href="https://www.facebook.com/hituneskaraoke"
            target="_blank"
          >
            <FaFacebookSquare />
          </Footer.Button2>
          
        </Footer.Section>
        <Footer.Copyright>
            <h6>
              Copyright <AiOutlineCopyright /> 2016 Hi Tunes Karaoke, Chris Han
            </h6>

            <h6>911 W Anderson Ln #117, Austin, TX 78757</h6>
          </Footer.Copyright>
      </Footer>
    
  );
}
