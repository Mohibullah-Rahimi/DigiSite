import React, { useContext } from "react";
import { FooterContainer, FooterSection, StyledAttrition, StyledExternalLink, StyledFooter, StyledHeading, FooterLogo, StyledSpan, NavLink } from "./style";
import { Center } from "../App/style";
import { social } from "./footerdata";
import { links } from "../Navbar/data";
import { CartContext } from "../../Contexts/CartContext";
import { getYear } from "../../utility/utils";

function Footer() {
  const { totalNumCartItems } = useContext(CartContext);

  return (
    <StyledFooter>
      <Center>
        <FooterContainer>
          <FooterLogo>1st & Third</FooterLogo>
          <FooterSection>
            <StyledHeading>Quick Links</StyledHeading>
            {links.map((link, index) => {
              const { url, text, icon } = link;
              return (
                <NavLink to={url} key={index}>
                  {text} {icon}
                  {text === "Cart" && totalNumCartItems > 0 && ( // Check if cart has items
                    <StyledSpan>{totalNumCartItems}</StyledSpan>
                  )}
                </NavLink>
              );
            })}
          </FooterSection>
          <FooterSection>
            <StyledHeading>Let's Connect!</StyledHeading>
            {social.map((link, index) => {
              const { url, icon } = link;
              return (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  {icon}
                </a>
              );
            })}
          </FooterSection>
        </FooterContainer>
        <StyledAttrition>
          &copy; {getYear()} Website created by:{" "}
          <StyledExternalLink
            href="https://www.linkedin.com/in/rahimi2020/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mohibullah Rahimi
          </StyledExternalLink>
        </StyledAttrition>
      </Center>
    </StyledFooter>
  );
}

export default Footer;
