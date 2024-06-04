import styled from "styled-components";

export const DetailsStyle = styled.div`
  height: 100%;

  .top {
    height: 100%;
    position: relative;

    .banner {
      width: 100%;
      height: 200px;
      /* background-image: url("../imgs/mountains-background-kfpok0pdo9yd6ha7.jpg");
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: cover; */
      background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 77.2%);
    }

    .button {
      position: absolute;
      top: 10px;
      right: 20px;
      background-color: white;
      color: black;
      border: none;
      border-radius: 5px;
      outline: none;
      transition: 0.2s ease;

      &:hover {
        background-color: black;
        color: white;
      }
    }

    .author {
      position: absolute;
      top: 90px;
      left: 50px;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      .profile {
        background-color: #0077ff;
        padding: 10px;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        font-weight: 500;
        color: white;
        border-radius: 100%;
        text-transform: capitalize;
      }

      .name {
        margin: 5px 0;
        font-size: 25px;
        font-weight: bold;
        color: grey;
        text-transform: capitalize;
      }
    }
  }

  .bottom {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    color: black;

    h2 {
      text-align: center;
      width: 70%;
    }

    img {
      width: 70%;
      height: 400px;
      object-fit: cover;
      border-radius: 10px;
    }

    .content {
      width: 65%;

      h4 {
        font-size: 30px;
        margin-bottom: 0;
      }

      .createdAt {
        text-align: center;
        margin-top: 60px;
        color: gray;
        font-size: 17px;
      }
    }
  }
`;
