import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const StyledNav = styled.nav`
  width: 100%;
  
  @media all and (min-width: 992px){
      width: auto;
  }
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media all and (min-width: 992px) {
      flex-direction: row;
    gap: 2rem;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: black;
  display: block;
  padding: 1rem;

  &:active {
    color: black;
  }
`;