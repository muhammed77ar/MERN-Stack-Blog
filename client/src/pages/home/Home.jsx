import { useEffect, useState } from "react";
import axios from "axios";
import ArticleSection from "../../components/articleSection/ArticleSection";
import Hero from "../../components/hero/Hero";
import { useNavigate } from "react-router-dom";
import AboutSection from "../../components/aboutSection/AboutSection";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate()

  // const fetchArticles = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:4001/articles');
  //     const articles = response.data;
  //     setArticles(articles);  // Update state with fetched articles
  //     localStorage.setItem("ARTICLES", JSON.stringify(articles));
  //   } catch (error) {
  //     console.error("Error fetching articles:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchArticles();
  // }, []);

  return (
    <div className='home'>
      <Hero />
      <AboutSection />
      <ArticleSection articles={articles} />
    </div>
  )
}
