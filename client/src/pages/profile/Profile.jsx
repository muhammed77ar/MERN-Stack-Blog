import styled from "styled-components"

import AuthNavbar from "../../components/authNavbar/AuthNavbar";
import Navbar from "../../components/navbar/Navbar";

const ProfileStyle = styled.div`
width: 100%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
gap: 30px;

.loader {
  font-size: 58px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  display: inline-block;
  color: #009dff;
  letter-spacing: 2px;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: 'We are working on it';
  position: absolute;
  left: 0;
  top: 0;
  color: #FFF;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  filter: drop-shadow(0 0 0.75rem #5bc6ff);
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}

.loader2 {
  width: 50px;
  height: 40px;
  position: relative;
  display: inline-block;
  --base-color: #263238; /*use your base color*/
}
.loader2::before {
  content: '';  
  left: 0;
  top: 0;
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #000000;
  background-image: radial-gradient(circle 8px at 18px 18px, white 100%, transparent 0), radial-gradient(circle 4px at 18px 0px, white 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, white 100%, transparent 0), radial-gradient(circle 4px at 36px 18px, white 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, white 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, white 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, white 100%, transparent 0), radial-gradient(circle 4px at 30px 30px, white 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, white 100%, transparent 0), radial-gradient(circle 4px at 5px 5px, white 100%, transparent 0);
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 3s linear infinite;
}
.loader2::after {
  content: '';  
  left: 35px;
  top: 15px;
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #000000;
  background-image: radial-gradient(circle 5px at 12px 12px, white 100%, transparent 0), radial-gradient(circle 2.5px at 12px 0px, white 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, white 100%, transparent 0), radial-gradient(circle 2.5px at 24px 12px, white 100%, transparent 0), radial-gradient(circle 2.5px at 12px 24px, white 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, white 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, white 100%, transparent 0), radial-gradient(circle 2.5px at 20px 20px, white 100%, transparent 0), radial-gradient(circle 2.5px at 3px 20px, white 100%, transparent 0), radial-gradient(circle 2.5px at 3px 3px, white 100%, transparent 0);
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 4s linear infinite reverse;
}
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}  
`

export default function Profile() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  return (
    <>
    {!token ? <Navbar /> : <AuthNavbar />}
    <ProfileStyle>
        <span className="loader">We are working on it</span>
        <span className="loader2"></span>
    </ProfileStyle>
    </>
  )
}
