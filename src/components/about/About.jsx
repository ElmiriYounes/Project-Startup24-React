import React, { useEffect, useState } from "react";
import { TitleSection, BorderBottom } from "../../globalStyles";
import {
  AboutUs,
  AboutUsImg,
  AboutUsText,
  ImgWrap,
  WhyUs,
  WhyUsCard,
} from "./AboutStyle";
import { MdBusiness, MdAttachMoney } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import about_us_img_WEBP from "../../assets/images/about_us_img.webp";
import about_us_img_PNG from "../../assets/images/about_us_img.png";

function About({ selector }) {
  const [windowScroll, setWindowScroll] = useState(0);
  const [top, setTop] = useState();

  useEffect(() => {
    const handleScrollYScreen = () => {
      setWindowScroll(window.scrollY);
    };

    setTop(selector.current.offsetTop - window.innerHeight + 100);

    window.addEventListener("scroll", handleScrollYScreen);
    return () => {
      window.removeEventListener("keydown", handleScrollYScreen);
    };
  }, [windowScroll, selector]);

  return (
    <>
      <TitleSection
        id="title_about_us"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: windowScroll > top ? 1 : 0,
          scale: windowScroll > top ? 1 : 0.5,
        }}
        transition={{ duration: 0.5 }}
      >
        Why us
      </TitleSection>
      <BorderBottom
        initial={{ width: 0 }}
        animate={{
          width: windowScroll > top ? "100%" : 0,
        }}
        transition={{ duration: 0.5 }}
      />
      <WhyUs>
        <WhyUsCard>
          <MdBusiness id="icon" />
          <span>professionalism</span>
        </WhyUsCard>
        <WhyUsCard>
          <TbTruckDelivery id="icon" />
          <span>fast</span>
        </WhyUsCard>
        <WhyUsCard>
          <MdAttachMoney id="icon" />
          <span>cheap</span>
        </WhyUsCard>
      </WhyUs>
      <AboutUs>
        <AboutUsImg>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <span className="over_tilt"></span>
          <ImgWrap className="img-wrap">
            <picture>
              <source srcSet={about_us_img_WEBP} type="image/webp" />
              <source srcSet={about_us_img_PNG} type="image/png" />
              <img src={about_us_img_PNG} alt="image" />
            </picture>
          </ImgWrap>
        </AboutUsImg>
        <AboutUsText>
          <h1>About us</h1>
          <BorderBottom />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            maxime exercitationem dicta, perferendis illo fugiat natus at
            repudiandae. Commodi cum placeat voluptatum nostrum facilis
            exercitationem numquam rem facere. Consequuntur, esse! Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Amet quas maxime
            soluta! Dignissimos, obcaecati laboriosam veritatis iste rem et
            molestias nulla reprehenderit iusto minima velit nesciunt quo dolor,
            alias perferendis.
          </p>
        </AboutUsText>
      </AboutUs>
    </>
  );
}

export default About;
