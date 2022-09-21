import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20px;
  background-color: rgba(0, 38, 130, 1);
  // to open ul in mobile
  .open_mobile_submenu {
    transform: translateX(0);
    opacity: 1;
    background-color: rgba(0, 38, 130, 1);
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5rem;
  color: white;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a img {
      width: 200px;
      height: 100%;
    }

  @media screen and (max-width: 480px) {
    font-size: 1rem;

    a img {
      width: 150px;
      height: 100%;
    }
  }
`;

export const LinkItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  .open_mobile_submenu {
    background-color: unset;
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    overflow-y: auto;
    position: absolute;
    height: calc(100vh - 100px);
    top: 100px;
    left: 0;
    right: 0;
    transition: 0.3s ease-out;
    transform: translateX(-100%);
    opacity: 0;
  }

  @media screen and (min-width: 961px) {
    .link {
      position: relative;
    }

    .link:hover {
      color: lightgray;
    }

    .link #AiOutlineRight {
      position: absolute;
      transform: rotate(225deg);
      top: -10px;
      left: -10px;
      opacity: 0;
      color: rgb(219, 147, 21);
      transition: all 0.5s ease-out;
      pointer-events: none;
    }

    .link:hover #AiOutlineRight {
      top: -15px;
      left: -15px;
      opacity: 1;
    }
  }
`;

export const LinkItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  padding: 0 1rem;
  height: 100%;
  font-weight: 600;
  transition: ${(porps) => porps.transition};

  @media screen and (max-width: 960px) {
    width: 100%;
    padding-top: 40px;
    &:last-child {
      padding-bottom: 40px;
    }
    transform: translateX(-100%);
    opacity: 0;
    .link {
      color: white;
      letter-spacing: 2px;
    }
    .link #AiOutlineRight {
      display: none;
    }
  }
  @media screen and (min-width: 961px) {
    &:last-child {
      margin-right: 0;
      padding-right: 0;
    }
    .link {
      color: white;
      letter-spacing: 2px;
      transition: 0.3s ease-out;
      position: relative;
    }
    .link::after {
      position: absolute;
      border-radius: 10px;
      background-color: rgb(219, 147, 21);
      width: 0;
      content: "";
      height: 2px;
      left: 50%;
      bottom: -7.5px;
      transition: 0.3s ease-out;
    }
    .link:hover::after {
      width: 100%;
      left: 0;
    }
  }
`;

export const MenuBurger = styled.div`
  width: 50px;
  height: 50px;
  display: none;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: center;

  .bar {
    transition: 0.3s linear;
    position: absolute;
    height: 2px;
    width: 80%;
    background-color: white;
    border-radius: 10px;
    pointer-events: none;
    display: block;
    right: 10%;
  }

  .bar-one {
    transform: translateY(-12.5px);
    width: 50%;
  }

  .bar-two {
    background-color: rgb(219, 147, 21);
  }

  .bar-three {
    transform: translateY(12.5px);
    width: 50%;
  }

  .bar-hover {
    width: 80%;
  }

  .bar-click-one {
    transform: translateY(0) rotate(405deg);
    right: unset;
  }

  .bar-click-two {
    width: 0;
    right: 50%;
  }

  .bar-click-three {
    transform: translateY(0) rotate(-405deg);
    right: unset;
  }

  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

export const ScrollYProgressWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  border-radius: 5px;
  overflow: hidden;
  left: 0;
  bottom: -3px;
  background-color: rgb(255, 255, 255, 0.3);
`;

export const ScrollYProgress = styled.div`
  position: absolute;
  width: 0;
  height: 100%;
  left: 0;
  background-color: #ff4000;
  transition: all 0.1s linear;
`;

export const ScrollToTop = styled(motion.div)`
  position: fixed;
  z-index: 999;
  bottom: 20px;
  right: 20px;

  .icon {
    font-size: 2.5rem;
    color: #ee5522d0;
    cursor: pointer;
    transition: all 0.3s linear;
  }
  .icon:hover {
    color: #ee5522;
    cursor: pointer;
  }
`;
