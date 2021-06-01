import React from "react";

import { Home, Hours, News } from "../components";
import LocationContainer from "../containers/location"
import NavContainer from "containers/nav"
import FooterContainer from "containers/footer"

export default function HomePage() {
  return (
    <>
      <NavContainer />
      <Home>
      <Home.BG />
        <Home.Container>
          <h1>SINGING IS EVERYTHING</h1>
          <p>Austin's best private room karaoke place</p>
          <Hours />
          <News />
          
          <LocationContainer />
        </Home.Container>
      </Home>
      <FooterContainer/>
    </>
  );
}
