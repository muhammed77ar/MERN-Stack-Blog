import { StyleArticles } from './StyledArticles';
import Card from '../../components/card/Card';
import Navbar from '../../components/navbar/Navbar';
import AuthNavbar from '../../components/authNavbar/AuthNavbar';
import { useFetchArticles } from '../../hooks/fetchArticles';
import { useEffect, useState } from 'react';

export default function Articles() {
  const { articles, loading } = useFetchArticles()
  const token = localStorage.getItem("ACCESS_TOKEN");

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!token ? <Navbar /> : <AuthNavbar />}
      <StyleArticles>
        <div className="top">
          <h2>From the blog</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Veniam quis rem ullam magnam officiis. Architecto deleniti quam ab quasi et!</p>
        </div>
        <div className="bottom">
          {articles.map(article => (
            <Card key={article._id} article={article} />
          ))}
        </div>
      </StyleArticles>
    </>
  );
}
