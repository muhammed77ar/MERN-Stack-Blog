import { StyleArticleSection } from './StyledArticleSection'
import Card from '../card/Card'
import { getAllArticles } from '../../redux/slices/articleSlice'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useFetchArticles } from '../../hooks/fetchArticles';

export default function ArticleSection() {
  const { articles, loading } = useFetchArticles()
  const topThreeArticles = articles.slice(0, 3);

  return (
    <StyleArticleSection>
      <div className="top">
        <h2>From the blog</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Veniam quis rem ullam magnam officiis. Architecto deleniti quam ab quasi et!</p>
      </div>
      <div className="bottom">
        {topThreeArticles.map(article => (
          <Card key={article._id} article={article} />
        ))}
      </div>
    </StyleArticleSection>
  );
}




