import styled from "styled-components";

const mobileBreakPoint = "790px";

export const HeroStyle = styled.div`
  background-image: url("../imgs/family-4610864_1280.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  position: relative;
  .contentContainer {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.8) 30%
    );
    @media screen and (max-width: ${mobileBreakPoint}) {
        background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.8) 20%
    );
    height: 80%;
    }
    height: 60%;
    width: 100%;
    position: absolute;
    bottom: 0;
    .text {
      color: white;
      position: absolute;
      bottom: 40px;
      margin: 10px 40px;
      display: flex;
      flex-direction: column;
      h2 {
        font-size: 40px;
        @media screen and (max-width: ${mobileBreakPoint}) {
          text-align: center;
          font-size: 35px;
        }
      }
      span {
        font-size: 15px;
        @media screen and (max-width: ${mobileBreakPoint}) {
          text-align: center;
        }
      }
    }
  }
`;
