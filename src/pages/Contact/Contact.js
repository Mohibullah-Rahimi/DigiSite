import React from "react";
import Form from "../../components/Form/Form";
import { MapContainer, StyledIframe } from "./style";
import { StyledHeading } from "../../components/App/style";
import { Container } from "./style";
import { Center } from "../../components/App/style";

function Contact() {
  return (
    <main>
      <Container>
        <StyledHeading>Contact Us</StyledHeading>
        <Form />
        <MapContainer>
          <StyledIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6929.660407197548!2d-95.52959052585527!3d29.724677333652988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c30399ce8da5%3A0x1538d4acddd96ebe!2s9221%20Pagewood%20Ln%2C%20Houston%2C%20TX%2077063!5e0!3m2!1sen!2sus!4v1716836475877!5m2!1sen!2sus"
            height="300"
            allowFullScreen="yes"></StyledIframe>
        </MapContainer>
      </Container>
    </main>
  );
}

export default Contact;
