import styled from "styled-components";

export const ContactUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 889px) {
    justify-content: center;
  }
`;

export const IconWrap = styled.div`
  margin: 10px;
  perspective: 3000px;
  position: relative;
  width: 405px;
  &:hover .icon,
  &:hover .icon_span {
    transform: rotateX(30deg) translateZ(80px) translateY(40px);
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    margin: 10px 0;
  }
`;

export const Icon = styled.div`
  transition: all 0.5s ease-out;
  perspective: 3000px;
  transform-style: preserve-3d;
  background-color: rgba(0, 38, 130, 1);
  padding: 30px;
  border-radius: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .icon {
    transition: all 0.5s ease-out;
    font-size: 7rem;
  }
`;

export const IconSpan = styled.span`
  transition: all 0.5s ease-out;
  margin-top: 20px;
  font-size: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
