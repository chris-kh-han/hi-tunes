import styled, { keyframes } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
      opacity: 1;
  }
  to {
      opacity: 0;
  }
`;

export const Nav = styled.nav`
  background: #000;
  height: 60px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;



export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: color 500ms ease;

  &:hover {
    color: #1AE68C;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: .7rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  transform: translate(-100%, 15px);

  @media screen and (max-width: 768px) {
    display: block;
    visibility: ${({ open }) => (open ? "hidden" : "visilbe")};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 35px);
    font-size: 2rem;
    cursor: pointer;
    transition: color 500ms ease;
  }

  &:hover {
    color: #1AE68C;
  }
`;

export const Closed = styled(FaWindowClose)`
  display: none;
  color: #fff;
  transform: translate(-100%, 15px);

  @media screen and (max-width: 768px) {
    display: block;
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 35px);
    font-size: 2rem;
    cursor: pointer;
    transition: color 500ms ease;
  }

  &:hover {
    color: #1AE68C;
  }
`;



export const Dropdown = styled.nav`
  display: none;

  @media screen and (max-width: 768px) {
    
    display: flex;

    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    width: 50%;
    height: 65%;
    background-color: var(--bg);
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    transition: all 500ms ease-in;
    animation: ${({ open }) => (open ? fadeIn : fadeOut)} 500ms ease-in-out;
    
    @media screen and (max-width: 768px) {
      top: 100px;
      
    }
  }
`;

export const DropdownLinks = styled(Link)`
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  /* transition: background var(--speed); */
  padding: 0.5rem;
  transition: color 500ms ease;
  margin-left: 1.5rem;

  &:hover {
    color: red;
  }


  &:hover:nth-child(2) {
    color: #9af0e1;
  }

  &:hover:nth-child(3) {
    color: #2e45b9;
  }

  &:hover:last-child {
    color: #1AE68C;
  }
`;
