// /*global google*/
import React from "react";
import { Location } from "../components";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

require("dotenv").config();

const API_KEY = process.env.REACT_APP_MAP_API_KEY;

function getLocationOnGoogleMap() {
  window.open(
    "https://www.google.com/maps/place/HiTunes+%ED%95%98%EC%9D%B4+%ED%8A%A0%EC%A6%88/@30.3477977,-97.7169557,17z/data=!3m1!4b1!4m5!3m4!1s0x8644cbcb5c65761d:0xa03510349bf2c9de!8m2!3d30.3477931!4d-97.714767"
  );
}

const url = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`;

const MapWithAMarker = withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 30.347818, lng: -97.714768 }}
  >
    <Marker
      position={{ lat: 30.347818, lng: -97.714768 }}
      animation={1}
      onClick={getLocationOnGoogleMap}
    />
  </GoogleMap>
));

export default function LocationContainer({ children }) {
  return (
    <Location>
      <h2>Location</h2>
      <MapWithAMarker
        googleMapURL={url}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </Location>
  );
}
