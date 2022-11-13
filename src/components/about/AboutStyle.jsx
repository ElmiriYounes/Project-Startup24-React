import styled from "styled-components";

export const WhyUs = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 889px) {
    justify-content: center;
  }
`;

export const WhyUsCard = styled.div`
  margin: 10px;
  background-color: rgb(195, 132, 23);
  border-radius: 15px;
  color: white;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  transition: all 0.3s ease-out;
  #icon {
    font-size: 5rem;
  }
  span {
    margin-top: 20px;
    font-size: 1.5rem;
    letter-spacing: 2px;
  }

  &:hover {
    transform: scale(1.01);
    -webkit-box-shadow: 0px 10px 30px 5px rgb(0, 0, 0, 0.4);
    box-shadow: 0px 10px 30px 5px rgb(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 889px) {
    width: 250px;
  }
`;

export const AboutUs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1080px) {
    position: relative;
    z-index: 0;
  }
`;

export const AboutUsImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 15px;
  position: relative;
  perspective: 1000px;
  transition: all 0.3s linear;

  .over_tilt {
    width: 33.333%;
    height: 33.333%;
    z-index: 1;
    position: absolute;
  }
  ${getNthChildOverTilt()}

  @media screen and (max-width: 1080px) {
    position: absolute;
    right: 0;
    opacity: 0.1;
    z-index: -1;
    pointer-events: none;
    .img-wrap {
      transform: rotateX(30deg) rotateY(30deg);
    }
  }
`;

function getNthChildOverTilt() {
  let str = "";
  let top = [
    "0",
    "0",
    "0",
    "33.333",
    "33.333",
    "33.333",
    "66.666",
    "66.666",
    "66.666",
  ];
  let left = [
    "0",
    "33.333",
    "66.666",
    "0",
    "33.333",
    "66.666",
    "0",
    "33.333",
    "66.666",
  ];
  let rotateX = ["-20", "-20", "-20", "0", "0", "0", "20", "20", "20"];
  let rotateY = ["20", "0", "-20", "20", "0", "-20", "20", "0", "-20"];

  for (let i = 1; i <= 9; i++) {
    str += `
        .over_tilt:nth-child(${i}){
            top:${top[i - 1]}%;
            left:${left[i - 1]}%;
        }
        .over_tilt:nth-child(${i}):hover ~ .img-wrap{
          transform: rotateX(${rotateX[i - 1]}deg) rotateY(${
      rotateY[i - 1]
    }deg);
        }
        .over_tilt:nth-child(${i}):hover ~ .img-wrap picture{
          transform: translateZ(60px);
        }
    `;
  }
  return str;
}

export const ImgWrap = styled.div`
  background-color: #0040d7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 15px;
  transform: rotateX(0deg) rotateY(0deg);
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: all 0.3s linear;

  picture{
    transition: all 0.3s linear;
  }

  img {
    position: relative;
    width: 350px;
    height: 100%;
  }
`;

export const AboutUsText = styled.div`
  width: 500px;
  padding-left: 20px;
  color: white;

  p {
    padding: 20px 0;
    line-height: 30px;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }

  @media screen and (min-width: 481px) and (max-width: 1080px) {
    width: 80%;
  }

  @media screen and (max-width: 1080px) {
    padding-left: 0;
  }
`;
