import React, { useEffect } from "react";
import {
  HeroContainer,
  HeroContent,
  Title,
  Image,
  ImageWrap,
  ButtonWrap,
  Circle,
} from "./HeroStyle";
import Startup_PNG from "../../assets/images/startup.webp";

const Hero = (props) => {
  return (
    <HeroContainer>
      <HeroContent>
        <Circle />
        <Circle />
        <Title>
          <h1>
            Your startup
            <br />
            delivered in 24h !
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            rem deserunt officiis unde veritatis nostrum quidem vitae itaque
            voluptatibus fugiat, adipisci molestiae omnis quos, vero qui
            excepturi consequatur obcaecati? Eius!
          </p>
          <ButtonWrap
            onClick={() => {
              window.scrollTo(0, props.scrollTo.current.offsetTop);
            }}
          >
            <span className="over_tilt"></span>
            <span className="over_tilt"></span>
            <span className="over_tilt"></span>
            <span className="over_tilt"></span>
            <span className="over_tilt"></span>
            <span className="over_tilt"></span>
            <button id="lets_start">
              <span>Let's start</span>
            </button>
          </ButtonWrap>
        </Title>
        <Image>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <ImageWrap className="img-wrap">
            <img src={Startup_PNG} alt="vector startup" />
          </ImageWrap>
        </Image>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
