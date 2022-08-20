import React from "react";
import { useRef } from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Services from "../components/services/Services";
import { Container } from "../globalStyles";

const Homepage = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const serviceRef = useRef();
  const contactRef = useRef();

  return (
    <div>
      {/* Navbar Start */}
      <Container bg_color="rgba(0,38,130,1)" fluid fixed>
        <Container>
          <Navbar scrollTo={[homeRef, aboutRef, serviceRef, contactRef]} />
        </Container>
      </Container>
      {/* Navbar End */}

      {/* Hero Start */}
      <Container bg_color="rgba(0,38,130,1)" fluid ref={homeRef}>
        <Container>
          <Hero />
        </Container>
      </Container>
      {/* Hero End */}

      {/* About Start */}
      <Container bg_color="rgba(0,38,130,1)" fluid ref={aboutRef} paddingBottom>
        <Container paddingTop>
          <About selector={aboutRef} />
        </Container>
      </Container>
      {/* About End */}

      {/* Services Start */}
      <Container bg_color="rgba(0,38,130,1)" fluid ref={serviceRef} paddingBottom>
        <Container paddingTop>
          <Services selector={serviceRef} />
        </Container>
      </Container>
      {/* Services End */}

      {/* Contact Start */}
      <Container bg_color="white" fluid ref={contactRef} paddingBottom>
        <Container paddingTop>
          <Contact selector={contactRef} />
        </Container>
      </Container>
      {/* Contact End */}

      {/* Footer Start */}
      <Container fluid>
        <Container>
          <Footer/>
        </Container>
      </Container>
      {/* Footer End */}
    </div>
  );
};

export default Homepage;
