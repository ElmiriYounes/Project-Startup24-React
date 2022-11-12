import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../../datas/NavLinks";
import {
  Nav,
  Logo,
  LinkItems,
  LinkItem,
  MenuBurger,
  ScrollYProgress,
  ScrollYProgressWrap,
  ScrollToTop,
} from "./NavbarStyle";
import { AiOutlineRight } from "react-icons/ai";
import Logo_PNG from "../../assets/images/logo.png";
import Logo_WEBP from "../../assets/images/logo.webp";
import { BsArrowUpSquareFill } from "react-icons/bs";

const Navbar = (props) => {
  const [clicked, setClick] = useState(false);
  const [hoverBtnBurger, setHoverBtnBurger] = useState(false);
  const transition = 0.5;
  const progressRef = useRef();
  const [windowScroll, setWindowScroll] = useState(0);

  window.onscroll = () => {
    const porgressScrollY =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100; // %
    progressRef.current.style.width = `${porgressScrollY}%`;

    setWindowScroll(window.scrollY);
  };

  useEffect(() => {
    hoverBtnBurger
      ? document.querySelector(".bar-one").classList.add("bar-hover")
      : document.querySelector(".bar-one").classList.remove("bar-hover");
    hoverBtnBurger
      ? document.querySelector(".bar-three").classList.add("bar-hover")
      : document.querySelector(".bar-three").classList.remove("bar-hover");
  }, [hoverBtnBurger]);

  useEffect(() => {
    if (clicked) {
      document.querySelector(".bar-one").classList.add("bar-click-one");
      document.querySelector(".bar-two").classList.add("bar-click-two");
      document.querySelector(".bar-three").classList.add("bar-click-three");
    } else {
      document.querySelector(".bar-one").classList.remove("bar-click-one");
      document.querySelector(".bar-two").classList.remove("bar-click-two");
      document.querySelector(".bar-three").classList.remove("bar-click-three");
    }
    const useResize = () => {
      if (window.innerWidth > 960 && clicked) setClick((c) => false);
    };
    window.addEventListener("resize", useResize);
    return () => {
      window.removeEventListener("resize", useResize);
    };
  }, [clicked]);

  const handleClick = () => {
    setClick((c) => !c);
  };

  const handleHoverBurger = () => {
    setHoverBtnBurger((h) => !h);
  };

  return (
    <>
      <Nav>
        <Logo>
          <Link to="/">
            <picture>
              <source srcset={Logo_WEBP} type="image/webp" />
              <source srcset={Logo_PNG} type="image/png" />
              <img src={Logo_PNG} alt="logo" />
            </picture>
          </Link>
        </Logo>
        <LinkItems className={clicked ? "open_mobile_submenu" : ""}>
          {NavLinks.map((link, index) => (
            <LinkItem
              key={index}
              transition={transition * index + "s"}
              className={clicked ? "open_mobile_submenu" : ""}
            >
              <Link
                to=""
                className="link"
                onClick={() => {
                  window.scrollTo(
                    0,
                    props.scrollTo[index].current.offsetTop - 50
                  );
                  setClick(false);
                }}
              >
                {link.title}
                <AiOutlineRight id="AiOutlineRight" />
              </Link>
            </LinkItem>
          ))}
        </LinkItems>
        <MenuBurger
          onClick={handleClick}
          onMouseEnter={handleHoverBurger}
          onMouseLeave={handleHoverBurger}
        >
          <span className="bar bar-one"></span>
          <span className="bar bar-two"></span>
          <span className="bar bar-three"></span>
        </MenuBurger>
        <ScrollYProgressWrap>
          <ScrollYProgress ref={progressRef} />
        </ScrollYProgressWrap>
      </Nav>
      <ScrollToTop
        initial={{ opacity: 0.3, scale: 0 }}
        animate={{
          opacity: windowScroll > 50 ? 1 : 0,
          scale: windowScroll > 50 ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <BsArrowUpSquareFill className="icon" />
      </ScrollToTop>
    </>
  );
};

export default Navbar;
