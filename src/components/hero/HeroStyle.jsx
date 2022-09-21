import styled, { keyframes } from "styled-components";

export const HeroContainer = styled.header`
  width: 100%;
  min-height: calc(100vh);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;

  @media screen and (max-width: 1080px) {
    min-height: unset;
  }
`;

export const HeroContent = styled.div`
  z-index: 0;
  position: relative;
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  color: white;
  padding-right: 100px;
  h1 {
    font-size: "3rem";
  }
  p {
    padding: 30px 0;
    line-height: 30px;
    color: white;
  }
  @media screen and (max-width: 780px) {
    h1 {
      font-size: 2rem;
    }
    padding-right: 0;
  }
`;

export const ButtonWrap = styled.div`
  position: relative;
  transition: all 0.6s ease-out;
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
  cursor: pointer;

  .over_tilt {
    width: 33.333%;
    height: 50%;
    z-index: 1;
    position: absolute;
  }

  button {
    position: relative;
    transition: all 0.6s ease-out;
    transform: rotateX(0deg) rotateY(0deg);
    perspective: 1000px;
    transform-style: preserve-3d;
    padding: 10px 26px;
    font-size: 1.3rem;
    border: none;
    background-color: rgb(195, 132, 23);
    color: white;
    letter-spacing: 2px;
    box-shadow: 0 0 60px -15px white;
    border-radius: 10px;
    transition: all 0.3s linear;
  }
  &:hover > button {
    box-shadow: 0 0 60px -10px white;
  }
  button span {
    transition: all 0.6s ease-out;
    transform: translateZ(0px);
    display: block;
  }
  ${getNthChildOverTilt(6)}
`;

export const Image = styled.div`
  position: relative;
  perspective: 1000px;
  transition: all 0.6s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.3s linear;
    transform: scale(1.1);
  }

  .over_tilt {
    width: 33.333%;
    height: 33.333%;
    z-index: 1;
    position: absolute;
  }

  ${getNthChildOverTilt(9)}

  @media screen and (max-width: 1080px) {
    position: absolute;
    right: 0;
    z-index: -1;
    opacity: 0.2;
    pointer-events: none;
    .img-wrap {
      transform: rotateX(30deg) rotateY(30deg);
    }
  }
`;

export const ImageWrap = styled.div`
  width: 450px;
  height: 370px;
  background-color: #0040d79c;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.6s ease-out;
  transform: rotateX(0deg) rotateY(0deg);
  perspective: 1000px;
  transform-style: preserve-3d;

  img {
    width: 100%;
    height: 100%;
    transition: all 0.6s ease-out;
    transform: translateZ(0);
  }
`;

function getNthChildOverTilt(n) {
  let str = "";
  let top =
    n === 9
      ? [
          "0",
          "0",
          "0",
          "33.333",
          "33.333",
          "33.333",
          "66.666",
          "66.666",
          "66.666",
        ]
      : ["0", "0", "0", "50", "50", "50"];
  let left =
    n === 9
      ? [
          "0",
          "33.333",
          "66.666",
          "0",
          "33.333",
          "66.666",
          "0",
          "33.333",
          "66.666",
        ]
      : ["0", "33.333", "66.666", "0", "33.333", "66.666"];
  let rotateX =
    n === 9
      ? ["-30", "-30", "-30", "0", "0", "0", "30", "30", "30"]
      : ["-20", "-20", "-20", "20", "20", "20"];
  let rotateY =
    n === 9
      ? ["30", "0", "-30", "30", "0", "-30", "30", "0", "-30"]
      : ["-20", "0", "20", "-20", "0", "20"];
  for (let i = 1; i <= n; i++) {
    if (n === 9) {
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
        .over_tilt:nth-child(${i}):hover ~ .img-wrap img{
          transform: translateZ(60px);
        }
    `;
    } else {
      str += `
        .over_tilt:nth-child(${i}){
            top:${top[i - 1]}%;
            left:${left[i - 1]}%;
        }
        .over_tilt:nth-child(${i}):hover ~ button{
            transform: rotateX(${rotateX[i - 1]}deg) rotateY(${
        rotateY[i - 1]
      }deg);
          }
          .over_tilt:nth-child(${i}):hover ~ button span{
            transform: translateZ(20px);
          }
    `;
    }
  }
  return str;
}

const translateLeft = keyframes`
  0%{transform: translate(0, 0) scale(0.9)}
  100%{transform: translate(-70px, -70px) scale(1)}
`;
const translateRight = keyframes`
  0%{transform: translate(0, 0) scale(0.9)}
  100%{transform: translate(70px, 70px) scale(1)}
`;

export const Circle = styled.span`
  content: "";
  background-color: rgb(219, 147, 21, 0.1);
  width: 300px;
  height: 300px;
  position: absolute;
  border-radius: 50%;
  left: 50%;
  margin-left: -300px;
  z-index: -1;
  transform: scale(0.9);

  &:nth-child(1) {
    animation: ${translateLeft} 10s ease-in-out infinite alternate;
  }
  &:nth-child(2) {
    animation: ${translateRight} 10s ease-in-out infinite alternate;
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;
