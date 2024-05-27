import {createBrowserRouter, json, Outlet, RouterProvider, useNavigate} from "react-router-dom"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import {createGlobalStyle} from "styled-components"
import Articles from "./pages/articles/Articles"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import { useDispatch, useSelector } from "react-redux"
import { login, loginSeletore } from "./redux/slices/loginSlice"
import { useEffect } from "react"
import Create from "./pages/createArticle/Create"
import axios from "axios"
import ArticleDetails from "./pages/ArticleDetails/ArticleDetails"
import EditArticle from "./pages/EditArticle/EditArticle"


const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat";
    position: relative;
    height: 100%;
    width: 100%;
    color: #00000075;
    background-color: white;
}
`


const GuestLayout = () => {

  const navigate = useNavigate()

  const token = localStorage.getItem("ACCESS_TOKEN")

  useEffect(()=>{
    if(token){
      navigate("/auth/home")
    }
},[token, navigate])
  return (
    <div className="guest-layout">
      <GlobalStyle />
      <Outlet />
      <Footer />
    </div>
  );
};

const AuthLayout = () => {
  const {accessToken} = useSelector(loginSeletore);
  const navigate = useNavigate()

  const token = localStorage.getItem("ACCESS_TOKEN")

useEffect(()=>{
  if(!token){
    navigate("/login")
  }
},[token, navigate])
  return (
    <div className="auth-layout">
      <GlobalStyle />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path : "/",
    element : <GuestLayout />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/articles",
        element : <Articles />
      },
      {
        path : "login",
        element : <Login />
      },
      {
        path : "signup",
        element : <Signup />
      },
      {
        path : "articleDetails/:id",
        element : <ArticleDetails />
      }
    ]
  },
  {
    path : "/auth",
    element : <AuthLayout />,
    children : [
      {
        path : "home",
        element : <Home />
      },
      {
        path : "articles",
        element : <Articles />
      },
      {
        path : "create",
        element : <Create />
      },
      {
        path : "articleDetails/:id",
        element : <ArticleDetails />
      },
      {
        path : "edit/:id",
        element : <EditArticle />
      }
    ]
  },

])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
