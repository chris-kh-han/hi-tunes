import React from "react";

import { Faq } from "../components/index";
import NavContainer from "containers/nav";
import FooterContainer from "containers/footer";

export default function FaqPage() {
  return (
    <>
      <NavContainer />
      <Faq>
        <Faq.Container>
          <h2>KARAOKE POLICY</h2>
          <ul>
            <li>
              Please keep all your belongings with you at all times. Hi Tunes
              Karaoke is NOT responsible for lost or stolen items.
            </li>
            <li>
              Each room has a different maximum capacity of people for safety
              reason.
            </li>
            <li>
              Customers who DO NOT arrive for their reservation and DO NOT
              provide notification in advance to HiTunes in 15 minutes, the
              reservation will be automatically cancelled.{" "}
            </li>
            <li>
              Confetti, artificial feather or any inflammable equipments are NOT
              permitted in Hi Tunes Karaoke.
            </li>
            <li>
              Customer who brings ice must bring icebox or leak-proof container
              big enough to hold ice.
            </li>
            <li>
              Customer will be responsible for any items that are broken inside
              the room during their reserved time. If you find any broken parts
              from our equipment such as TV, remote controller, microphone,
              bench, table, and so on, please notify the front desk as soon as
              possible before your party starts.
            </li>
          </ul>
        </Faq.Container>

        <Faq.Container>
          <h2>PRICE</h2>
          <ul>
          <h4>Q. What are the rates?</h4>
          {/* <Button            
              component={Link}
              to={"/price#pricing"}
              target="_blank" 
            > 
              Ch5ck to see pricing
            </Button> */}
          <h4>Q. Is tax included in the price?</h4>
          <li>
            A. State of Texas sales tax and city of Austin sales tax (total
            8.25%) will be added to your total.
          </li>

          <h4>Q. Is there a minimum hour(s)?</h4>
          <li>
            A. You can rent our room for 1-hour minimum for walk-in and 2 hours
            minimum for a reservation.
          </li>

          <h4>Q. Is tipping necessary?</h4>
          <li>
            A. We work here for our customers so you can have the best private
            room karaoke experience; <br />
            We clean the room before and after your party. <br />
            We provide you items (upon request) that can help your party going
            such as napkin, paper plates, cups, forks, spoons, bottle opener, or
            wine opener (wine opener must be used at the front desk). <br />
            Tips are not expected, but they are certainly appreciated! Thank
            you!
          </li>

          <h4>
            Q. Do we have to pay for the full hours of reservation even though
            we leave early?
          </h4>
          <li>
            A. We are to charge you the full amount of your reservation. Because
            we will not be able to take another reservation once your
            reservation is made.
          </li>
          </ul>
          
        </Faq.Container>
      </Faq>
      <FooterContainer />
    </>
  );
}
