import styled from "styled-components";

const mobileBreakPoint = "790px"

export const StyleLogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (max-width: ${mobileBreakPoint}){
    margin-top: 20px;
  }
  .container {
    display: flex;
    width: 70%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    @media screen and (max-width: ${mobileBreakPoint}){
        width: 90%;
        height: fit-content;
    }
  }
  .left {
    background: url("../imgs/download (28).jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
    margin-right: 30px;
    box-shadow: 6px 0px 13px -6px rgba(0,0,0,0.63);
    border-top-left-radius:10px ;
    border-bottom-left-radius: 10px;
    @media screen and (max-width: ${mobileBreakPoint}){
        display: none;
    }
  }
  .right {
    width: 50%;
    display: flex;
    align-items: start;
    justify-content: center;
    @media screen and (max-width: ${mobileBreakPoint}){
        justify-content: center;
        width: 100%;
    }
    form {
        .title{
            margin-bottom: 20px;
            @media screen and (max-width: ${mobileBreakPoint}){
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            h2{
                font-size: 35px;
                color: black;
                height: 30px;
            }
        }
        @media screen and (max-width: ${mobileBreakPoint}){
            margin:20px;
            align-items: center;
        }
        width: 100%;
      margin-left: 50px;   
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media screen and (max-width: ${mobileBreakPoint}){
            
        }
        label{
            margin-bottom: 5px;
        color: black;
        font-weight: 500;
      }
      input{
        background-color: white;
        border: 1px solid lightgray;
        height: 40px;
        margin-bottom: 20px;
        border-radius: 5px;
        color:  gray;
        font-size: 15px;
        padding-left: 10px;
        width: 80%;
        &:focus{
            border: 2px solid #7d92f9;
            outline: none;
        }
      }
      }
      button{
        background-color: #7d92f9;
        width: 85%;
        margin-bottom: 20px;
        &:focus{
            outline: none;
        }
        &:hover{
            background-color:#4b69ff;
        }
      }
      span{
        width: 85%;
        text-align: center;
        margin-bottom: 30px;
      }
      
    }
  
`;
