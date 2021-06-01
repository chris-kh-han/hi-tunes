import React from "react";

import {
  Nav,
  NavLink,
  Bars,
  Closed,
  NavMenu,
  Dropdown,
  DropdownLinks,
} from "./styles/Navbar";


export default function Navbar({ children }) {
  return <Nav>{children}</Nav>;
}

Navbar.Link = function NavbarLink({ children, ...restProps }) {
  return <NavLink {...restProps}>{children}</NavLink>;
};

Navbar.Bars = function NavbarBars({ children, open, ...restProps }) {
  return <Bars open={open} {...restProps}>{children}</Bars>;
};

Navbar.Closed = function NavbarClosed({ children, open, ...restProps }) {
  return <Closed open={open} {...restProps}>{children}</Closed>;
};

Navbar.Menu = function NavbarMenu({ children }) {
  return <NavMenu>{children}</NavMenu>;
};

Navbar.Dropdown = function NavbarDropdown({ children, open, ...restProps }) {
  
  return (
    
    <Dropdown open = {open} {...restProps}>{children}</Dropdown>
    
  );
};

Navbar.DropdownLinks = function NavbarDropdownLinks({
  children,
  ...restProps
}) {
  return <DropdownLinks {...restProps}>{children}</DropdownLinks>;
};

