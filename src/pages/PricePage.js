import React from "react";

import { Price } from "../components";
import NavContainer from "containers/nav"
import FooterContainer from "containers/footer"



export default function PricePage() {
  return (
    <>
      <NavContainer/>
      <Price>
        <h2>ROOM PRICES</h2>
        <Price.Table>
          <Price.SubTable>
            <h2>Small Room</h2>

            <h5>
              Hourly Rate Up to 5 people for $20.00 and $5 each additional
              person
            </h5>
            <h6>Max # of people Room</h6>

            <h6>{"Room 1, 8 => 9"}</h6>
            <h6>{"Room 6, 7 => 10"}</h6>
            <h6>{"Minimum Charge => $20"}</h6>
          </Price.SubTable>

          <Price.SubTable>
            <h2>Medium Room</h2>

            <h5>
              Hourly Rate Up to 8 people for $35.00 and $5 each additional
              person
            </h5>
            <h6>Max # of people Room</h6>

            <h6>{"Room 2, 5 => 14"}</h6>
            <h6>{"Room 4 => 13"}</h6>
            <h6>{"Minimum Charge => $35"}</h6>
          </Price.SubTable>

          <Price.SubTable>
            <h2>Large Room</h2>

            <h5>
              Hourly Rate Up to 15 people for $60.00 and $5 each additional
              person
            </h5>
            <h6>Max # of people Room</h6>

            <h6>{"Room 1, 8 => 9"}</h6>
            <h6>{"Room 3 => 24"}</h6>
            <h6>{"Minimum Charge => $60"}</h6>
          </Price.SubTable>
        </Price.Table>

        <Price.Reservation>
          <h2>RESERVATION POLICY</h2>

          <h6>
            1. Please Do Not make a reservation until you know your reservation
            plan (Date, Time, number of people).
          </h6>
          <h6>
            2. Please notify us at least 15 minutes in advance if you are
            running late. Otherwise, your reservation will be cancelled.{" "}
          </h6>
          <h6>
            3. Once your reservation is confirmed, we will call/text/email you.
            Otherwise, your reservation isn't confirmed.{" "}
          </h6>
          <h6>4. 2 hours minimum reservation for Fridays and Saturdays.</h6>
          <h6>5. You can make a reservation for up to a month in advance.</h6>
        </Price.Reservation>

        <Price.SongSelection>
          <h2>SONG SELECTIONS</h2>
          <h6>Here at Hi Tunes, we have assorted song selections.</h6>
          <h6>
            You can sing your favorite songs with every genre including Pop,
            Rock, H&B Hits and much more.
          </h6>
          <h6>
            On top of that, we have songs for countries like English-spoken
            countries, Korea, Japan, China, Vietnam, Philippines, and Indonesia.
          </h6>
        </Price.SongSelection>
      </Price>
      <FooterContainer/>
      {/* <h2>ROOM KARAOKE</h2>

      <h4>Best Karaoke in Austin</h4>
      <ul>
        <li>
          "Hi TUNES" is a private Karaoke room establishment. Also known as a
          "Noraebang" in Korea, Karaoke Rooms provide a comfortable environment
          with privacy.
        </li>
      </ul>

      <h2>RESERVATION POLICY</h2>
      <ol>
        <li>
          Please Do Not make a reservation until you know your reservation plan
          (Date, Time, number of people).
        </li>
        <li>
          Please notify us at least 15 minutes in advance if you are running
          late. Otherwise, your reservation will be cancelled.{" "}
        </li>
        <li>
          Once your reservation is confirmed, we will call/text/email you.
          Otherwise, your reservation isn't confirmed.{" "}
        </li>
        <li>
          2 hours minimum reservation for Fridays and Saturdays.
        </li>
        <li>You can make a reservation for up to a month in advance.</li>
      </ol> */}
    </>
  );
}
