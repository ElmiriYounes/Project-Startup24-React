import React from "react";
import {
  HeroContainer,
  HeroContent,
  Title,
  Image,
  ImageWrap,
  ButtonWrap,
  Circle,
} from "./HeroStyle";
import Startup_WEBP from "../../assets/images/startup.webp";
import Startup_PNG from "../../assets/images/startup.png";

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
            <picture>
              <source srcset={Startup_WEBP} type="image/webp" />
              <source srcset={Startup_PNG} type="image/png" />
              <img src={Startup_PNG} alt="image" />
            </picture>
          </ImageWrap>
        </Image>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
