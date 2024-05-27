import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login, loginSeletore, logout } from '../../redux/slices/loginSlice';

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
  background-color: #00000076;
  width: 100%;
}

nav .logo .link {
  font-size: 1.5rem;
  font-weight: bolder;
  background: linear-gradient(to top, #feffff 0%, #ffffff 100%);
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
  color: white;
  font-size: 95%;
  font-weight: bolder;
  padding: 4px 8px;
  border-radius: 5px;
}
nav ul li a {
  text-decoration: none;
  color: white;
  font-size: 95%;
  cursor: pointer;
  font-weight: bolder;
  padding: 4px 8px;
  border-radius: 5px;
}

nav ul li .link:hover {
  background-color: #007fc9;
}

.hamburger {
  display: none;
  cursor: pointer;
  margin-left: 20px;
}

.hamburger .line {
  width: 25px;
  height: 2px;
  background-color: white;
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

export default function AuthNavbarHome() {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [author, setAuthor] = useState()

  const authUser = async () => {
    try {
      const token = localStorage.getItem('ACCESS_TOKEN');
    if (!token) {
      throw new Error('No token found');
    }
      axios.defaults.withCredentials = true;
      const response = await axios.get("http://localhost:4000/profile");
      if (response && response.data) {
        dispatch(login(response.data))
        setAuthor(response.data)
      }else{
        console.log("not work")
      }
    
    } catch (error) {
      console.error("Error fetching authUser:", error);
    }
  };

  useEffect(() => {
    authUser();
  }, []);
  
  


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
            <Link className='link' onClick={() => logOut()}>Logout({author?.username})</Link>
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
            <Link className='link' onClick={() => logOut()}>Logout({author?.username})</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}
