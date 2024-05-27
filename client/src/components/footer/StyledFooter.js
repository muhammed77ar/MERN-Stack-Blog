import styled from "styled-components";

const mobileBreakPoint = "790px";

export const Footerr = styled.div`
margin-top: 60px;
  .top {
    padding: 50px 50px 50px 50px;
    background-color: rgb(41, 41, 41);
    display: flex;
    gap: 50px;
    @media screen and (max-width: ${mobileBreakPoint}) {
      flex-direction: column;
    }
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: justify;
      font-size: 14px;
      h1 {
        font-size: 18px;
        font-weight: 500;
        color: white;
      }
      span {
        color: lightgray;
      }
    }
  }
  
`;
