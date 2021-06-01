import React, { useState } from "react";
import { Navbar } from "../components";

import logo from "assets/image/logo.png";

export const OpenContext = React.createContext();

export default function NavContainer() {
  const [open, setOpen] = useState(false);
  
  return (
    <Navbar>
      <Navbar.Link to="/">
        {/* <img src={logo} alt="HI Tunes" width="60px" height="60px" /> */}
        <h3>Hi Tunes</h3>
      </Navbar.Link>

      <Navbar.Bars open={open} onClick={() => setOpen(!open)} />
      <Navbar.Closed open={open} onClick={() => setOpen(!open)}/>
      
      <Navbar.Dropdown open={open}>
        <Navbar.DropdownLinks to="/price">
          <h1>PRICES</h1>
        </Navbar.DropdownLinks>
        <Navbar.DropdownLinks to="/special">
          <h1>SPECIAL</h1>
        </Navbar.DropdownLinks>
        <Navbar.DropdownLinks to="/faq">
          <h1>FAQ</h1>
        </Navbar.DropdownLinks>
        <Navbar.DropdownLinks to="/contact">
          <h1>CONTACTS</h1>
        </Navbar.DropdownLinks>
        <Navbar.DropdownLinks to="/reserve">
          <h1>RESERVE</h1>
        </Navbar.DropdownLinks>
      </Navbar.Dropdown>
      

      <Navbar.Menu>
        <Navbar.Link to="/price">
          <h1>PRICES</h1>
        </Navbar.Link>
        <Navbar.Link to="/special">
          <h1>SPECIAL</h1>
        </Navbar.Link>
        <Navbar.Link to="/faq">
          <h1>FAQ</h1>
        </Navbar.Link>
        <Navbar.Link to="/contact">
          <h1>CONTACTS</h1>
        </Navbar.Link>
      </Navbar.Menu>
    </Navbar>
  );
}
