import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FiInstagram, FiTwitter } from "react-icons/fi";

export const StyledFooter = styled.footer`
  background: #2AAA8A; /* Changed to a green shade */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0; /* Increased padding for better spacing */
  text-align: center;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 992px) {
    flex-direction: column;
  }
`;

export const StyledHeading = styled.h3`
  color: white;
  font-size: 1.5rem; /* Increased font size for better readability */
  margin-bottom: 1rem;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem; /* Increased padding for better spacing */
  gap: 0.5rem;
  font-size: 1.2rem; /* Increased font size for better readability */
  position: relative;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #ff9800; /* Changed to a brighter orange */
    text-decoration-thickness: 3px;
    text-decoration-style: wavy;
    text-underline-offset: 0.1rem;
  }
`;

export const StyledInstagram = styled(FiInstagram)`
  color: white;
  font-size: 2rem;

  &:hover {
    color: #ff9800; /* Changed to a brighter orange */
  }
`;

export const StyledTwitter = styled(FiTwitter)`
  color: white;
  font-size: 2rem;

  &:hover {
    color: #ff9800; /* Changed to a brighter orange */
  }
`;

export const StyledAttrition = styled.small`
  text-align: center;
  margin-top: 1rem;
  display: block;
  padding: 1rem;
  color: lightgray; /* Changed to light gray for better visibility */
`;

export const StyledExternalLink = styled.a`
  color: white;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #ff9800; /* Changed to a brighter orange */
    text-decoration-thickness: 3px;
    text-decoration-style: wavy;
    text-underline-offset: 0.1rem;
  }
`;

export const FooterLogo = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  align-self: center;
  font-family: "Playfair Display", serif;
`;

export const StyledSpan = styled.span`
  position: absolute;
  background: white;
  color: #004d40; /* Changed to match the new green shade */
  padding: 0 0.2rem;
  right: -0px;
  bottom: 55%;
  font-weight: bold;
  right: 50%;
  transform: translateX(35px);
  border-radius: 0.2rem; /* Added border-radius for a smoother look */
  font-size: 1rem; /* Adjusted font size for better readability */
`;
