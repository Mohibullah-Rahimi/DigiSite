import React, {useState} from 'react'
import { StyledHeader, StyledLogo, Container, SubContainer } from './style';
import Navbar from '../Navbar/Navbar';
import Hamburger from '../Hamburger/Hamburger';

function Header() {


  return (
    <StyledHeader>
      <Container>
        <SubContainer>
          <StyledLogo>DigiSite</StyledLogo>
          <Hamburger />
        </SubContainer>
        <Navbar />
      </Container>
    </StyledHeader>
  );
}

export default Header