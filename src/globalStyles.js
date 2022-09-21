import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import Montserrat from "./fonts/Montserrat/Montserrat-Regular.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Montserrat";
  font-display: swap;
  src: url(${Montserrat}) format("truetype");
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Montserrat";
    /* font-family: 'Montserrat', 'sans-serif'; */
    letter-spacing: 1px;
    scroll-behavior: smooth;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

html, body{
    width: 100%;
    overflow-x: hidden;
    background-color: rgba(0,38,130,1);
}

li{
    list-style: none;
}

a{
    text-decoration: none;
    color: unset;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => (props.fluid ? "unset" : "1300px")};
  position: ${(props) => (props.fixed ? "fixed" : "unset")};
  top: ${(props) => (props.fixed ? "0" : "unset")};
  z-index: ${(props) => (props.fixed ? "9999" : "unset")};
  margin: 0 auto;
  background: ${(props) => props.bg_color};
  padding-bottom: ${(props) => props.paddingBottom && "20px"};

  & > * {
    padding-top: ${(props) => props.paddingTop && "100px"};
  }
`;

export const TitleSection = styled(motion.h1)`
  color: ${(props) => props.color || "white"};
  font-size: 3rem;
  padding-bottom: 10px;
  text-align: center;

  @media screen and (max-width: 1080px) {
  }
`;

export const BorderBottom = styled(motion.span)`
  display: block;
  margin: 0 auto;
  height: 2px;
  background-color: rgb(219, 147, 21);
  padding-top: 0;
`;

export default GlobalStyle;
