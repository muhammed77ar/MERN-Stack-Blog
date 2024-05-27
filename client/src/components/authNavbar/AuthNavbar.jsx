import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loginSeletore, logout } from '../../redux/slices/loginSlice';
import axios from 'axios';
import { useFetchAuthUser } from '../../hooks/fetchAuthUser';

const Container = styled.div`

  * {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

nav {
  padding: 5px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

nav .logo .link {
  font-size: 1.3rem;
  font-weight: bold;
  background: linear-gradient(to top, #8adcff 0%, #0077ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav ul li {
  margin-left: 1.5rem;
}
nav ul li .link {
  text-decoration: none;
  color: #000;
  font-size: 95%;
  font-weight: 400;
  padding: 4px 8px;
  border-radius: 5px;
}

nav ul li .link:hover {
  background-color: #f5f5f5;
}

.hamburger {
  display: none;
  cursor: pointer;
  margin-left: 20px;
}

.hamburger .line {
  width: 25px;
  height: 2px;
  background-color: #1f1f1f;
  display: block;
  border-radius: 100px;
  margin: 7px auto;
  transition: all 0.3s ease-in-out;
}
.hamburger-active {
  transition: all 0.3s ease-in-out;
  transition-delay: 0.6s;
  transform: rotate(45deg);
}

.hamburger-active .line:nth-child(2) {
  width: 0px;
}

.hamburger-active .line:nth-child(1),
.hamburger-active .line:nth-child(3) {
  transition-delay: 0.3s;
}

.hamburger-active .line:nth-child(1) {
  transform: translateY(12px);
}

.hamburger-active .line:nth-child(3) {
  transform: translateY(-6px) rotate(90deg);
}

.menubar {
  position: absolute;
  top: 0;
  left: -60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  height: 100%;
  padding: 20% 0;
  background: rgba(255, 255, 255);
  transition: all 0.5s ease-in;
  z-index: 100;
}
.active {
  left: 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.menubar ul {
  padding: 0;
  list-style: none;
}
.menubar ul li {
  margin-bottom: 32px;
}


.menubar ul li .link {
  text-decoration: none;
  color: #000;
  font-size: 95%;
  font-weight: 400;
  padding: 5px 10px;
  border-radius: 5px;
}

.menubar ul li .link:hover {
  background-color: #f5f5f5;
}
@media screen and (max-width: 790px) {
  .hamburger {
    display: block;
  }
  nav ul {
    display: none;
  }
}
`;

export default function AuthNavbar() {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {Author} = useFetchAuthUser()


  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const logOut = async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.post("http://localhost:4000/logout");
    dispatch(logout());
    navigate("/login");
};

  return (
    <Container>
      <nav>
        <div className="logo">
          <Link className='link' to={"/auth/home"}>JourneyJournals</Link>
        </div>
        <ul>
          <li>
            <Link className='link' to={"/auth/home"}>Home</Link>
          </li>
          <li>
            <Link className='link' to={"/auth/articles"}>Articles</Link>
          </li>
          <li>
            <Link className='link' to={"/auth/create"}>Create Article</Link>
          </li>
          <li>
            <Link className='link' onClick={() => logOut()}>Logout({Author?.username})</Link>
          </li>
        </ul>
          <div className={`hamburger ${isActive ? 'hamburger-active' : ''}`} onClick={toggleNav}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
      </nav>
      <div className={`menubar ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <Link className='link' to={"/auth/home"}>Home</Link>
          </li>
          <li>
            <Link className='link' to={"/auth/articles"}>Articles</Link>
          </li>
          <li>
          <Link className='link' to={"/auth/create"}>Create Article</Link>
          </li>
          <li>
            <Link className='link' onClick={() => logOut()}>Logout({Author?.username})</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}
