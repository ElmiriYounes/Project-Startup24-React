import React, { useEffect, useState } from "react";
import { BorderBottom, TitleSection } from "../../globalStyles";
import { ContactUs, Icon, IconSpan, IconWrap } from "./ContactStyle";

import { MdAlternateEmail } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

const Contact = ({ selector }) => {
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
        color="rgba(0,38,130,1)"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: windowScroll > top ? 1 : 0,
          scale: windowScroll > top ? 1 : 0.5,
        }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </TitleSection>
      <BorderBottom
        initial={{ width: 0 }}
        animate={{
          width: windowScroll > top ? "100%" : 0,
        }}
        transition={{ duration: 0.5 }}
      />
      <ContactUs>
        <IconWrap>
          <Icon className="icon_container">
            <MdAlternateEmail className="icon" />
            <IconSpan className="icon_span">info@startup24.com</IconSpan>
          </Icon>
        </IconWrap>
        <IconWrap>
          <Icon className="icon_container">
            <RiCustomerService2Line className="icon" />
            <IconSpan className="icon_span">(02) 522 23 23</IconSpan>
          </Icon>
        </IconWrap>
      </ContactUs>
    </>
  );
};

export default Contact;
