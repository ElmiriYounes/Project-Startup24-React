import React, { useEffect, useState } from "react";
import { TitleSection, BorderBottom } from "../../globalStyles";
import {
  ServicesCard,
  ServiceCard,
  ServiceCardWrapper,
  ServiceDesc,
  ServiceTitle,
  BackgroundColor,
} from "./ServicesStyle";

const Services = ({ selector }) => {
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
        Our services
      </TitleSection>
      <BorderBottom
        initial={{ width: 0 }}
        animate={{
          width: windowScroll > top ? "100%" : 0,
        }}
        transition={{ duration: 0.5 }}
      />
      <ServicesCard>
        <ServiceCardWrapper>
          <ServiceCard className="service_card">
            <ServiceTitle className="service_title">Service 1</ServiceTitle>
          </ServiceCard>
          <ServiceDesc className="service_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            tenetur, et recusandae, quia fugiat optio commodi repellat
            voluptatibus ipsa incidunt, eius ducimus deserunt ratione illum
            neque cum reiciendis doloremque fugit!
          </ServiceDesc>
        </ServiceCardWrapper>
        <ServiceCardWrapper>
          <ServiceCard className="service_card">
            <ServiceTitle className="service_title">Service 2</ServiceTitle>
          </ServiceCard>
          <ServiceDesc className="service_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            tenetur, et recusandae, quia fugiat optio commodi repellat
            voluptatibus ipsa incidunt, eius ducimus deserunt ratione illum
            neque cum reiciendis doloremque fugit!
          </ServiceDesc>
        </ServiceCardWrapper>
        <ServiceCardWrapper>
          <ServiceCard className="service_card">
            <ServiceTitle className="service_title">Service 3</ServiceTitle>
          </ServiceCard>
          <ServiceDesc className="service_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            tenetur, et recusandae, quia fugiat optio commodi repellat
            voluptatibus ipsa incidunt, eius ducimus deserunt ratione illum
            neque cum reiciendis doloremque fugit!
          </ServiceDesc>
        </ServiceCardWrapper>
      </ServicesCard>
    </>
  );
};

export default Services;
