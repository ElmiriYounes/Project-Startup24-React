import styled from "styled-components";

export const ServicesCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 889px) {
    justify-content: center;
  }
`;

export const ServiceCardWrapper = styled.div`
  position: relative;
  perspective: 500px;
  height: 250px;
  width: 225px;
  margin: 10px;
  &:hover .service_card {
    transform: rotateX(180deg);
  }
  &:hover .service_title {
    transform: translateZ(90px);
  }
  &:hover .service_desc {
    transform: rotateX(0) translateZ(0);
    z-index: 0;
  }
`;

export const ServiceCard = styled.div`
  perspective: 500px;
  transform-style: preserve-3d;
  transition: all 1s linear;
  width: 100%;
  height: 100%;
  background-color: rgb(219, 147, 21);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ServiceTitle = styled.div`
  color: white;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid white;
  padding: 5px 10px;
  transition: all 1s linear;
  transform: translateZ(0);
`;

export const ServiceDesc = styled.p`
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  transition: all 1s linear;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: -1;
  transform: rotateX(-180deg) translateZ(90px);
`;
