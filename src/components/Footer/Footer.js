import React from "react";
import {
  FooterContainer,
  FooterSection,
  StyledAttrition,
  StyledExternalLink,
  StyledFooter,
} from "./style";
import { Center } from "../App/style";
import { social } from "./footerdata";
import { links } from "../Navbar/data";
import { NavLink } from "./style";

function Footer() {
  return (
    <StyledFooter>
      <Center>
        <FooterContainer>
          <FooterSection>
            <h2>Quick Links</h2>
            {links.map((link, index) => {
              const { url, text, icon } = link;
              return (
                <NavLink to={url} key={text}>
                  {text} {icon}
                </NavLink>
              );
            })}
          </FooterSection>
          <FooterSection>
            <h2>Let's Connect!</h2>
            {social.map((link, index) => {
              const { url, icon } = link;
              return (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={index}>
                  {icon}
                </a>
              );
            })}
          </FooterSection>
        </FooterContainer>
        <StyledAttrition>
          Website created by:{" "}
          <StyledExternalLink
            href="https://natashajohnson.dev/"
            target="_blank noreferrer noopener">
            Natasha Johnson
          </StyledExternalLink>
        </StyledAttrition>
      </Center>
    </StyledFooter>
  );
}

export default Footer;