import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_ARTICLE_SERVICE}/articles`);
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};
