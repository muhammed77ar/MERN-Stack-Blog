import { useSelector } from "react-redux";
import { loginSeletore } from "../../redux/slices/loginSlice";
import NavbarHome from "../navbarHome/NavbarHome";
import { HeroStyle } from "./StyledHero";
import AuthNavbarHome from "../authNavbarHome/AuthNavbarHome";


export default function Hero() {
  const token = localStorage.getItem("ACCESS_TOKEN")

  return (
    <HeroStyle>
        {!token ? <NavbarHome /> : <AuthNavbarHome />}
        <div className="contentContainer">
            <div className="text">
                <h2>Journey Journals Online: Your Gateway to Global Exploration</h2>
                <span>Dive into captivating narratives and stunning visuals, uncovering the world's wonders and cultural treasures. Let our stories ignite your wanderlust and inspire your next adventure. Join our community of adventurers and explorers today</span>
            </div>
        </div>
    </HeroStyle>
  )
}
