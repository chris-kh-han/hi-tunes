import React from "react";

import { Special } from "../components/";
import NavContainer from "containers/nav";
import FooterContainer from "containers/footer";

export default function SpecialPage() {
  return (
    <>
      <NavContainer />
      <Special>
        <Special.Div>
          <h2>MONTHLY SPECIALS</h2>
          <h4>Weekday Special</h4>
          <h5>20% Off Weekdays!!!</h5>
          <div>
            <h6>
              Fridays and Saturdays are considered as weekends and Sundays as a
              weekday.
            </h6>

            <h6>*Exclude a night before holidays</h6>
            <h6>New Year’s Day</h6>
            <h6>Memorial Day</h6>
            <h6>Independence Day</h6>
            <h6>Labor Day</h6>
            <h6>Halloween Day</h6>
            <h6>Thanksgiving Day</h6>
            <h6>Christmas Day</h6>
          </div>
        </Special.Div>
      </Special>
      <FooterContainer />
    </>
  );
}
