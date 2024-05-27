import { Link, useParams } from "react-router-dom";
import { DetailsStyle } from "./StyledArticleDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthNavbar from "../../components/authNavbar/AuthNavbar";
import { format } from 'date-fns';
import Navbar from "../../components/navbar/Navbar";
import { login, loginSeletore } from "../../redux/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFetchAuthUser } from "../../hooks/fetchAuthUser";


export default function ArticleDetails() {
  const { id } = useParams()
  const [article, setArticle] = useState()
  const [firstLetter, setFirstLetter] = useState()
  const { Author } = useFetchAuthUser()
  const [loading, setLoading] = useState(true);

  console.log(Author)



  useEffect(() => {
    if (article?.author) {
      setFirstLetter(article.author.username.charAt(0));
    }
  }, [article]);


  const fetchArticle = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/articles/${id}`);
      setArticle(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching article:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [id]);
  console.log(article)

  if (loading) {
    return <div>Loading...</div>;
  }

  const createdAt = article?.createdAt;
  const formattedDate = createdAt ? format(new Date(createdAt), 'yyyy-MM-dd HH:mm') : 'Invalid Date';

  const token = localStorage.getItem("ACCESS_TOKEN")




  return (
    <>
      {token ? <AuthNavbar /> : <Navbar />}
      <DetailsStyle>
        <div className="top">
          <div className="banner"></div>
          <div className="author">
            <div className="profile">{firstLetter}</div>
            <p className="name">{article?.author.username}</p>
          </div>
          {token && Author.id === article?.author._id &&
            <Link to={`/auth/edit/${article?._id}`} >
            <button className="button">Edit this article</button>
            </Link>
          }
        </div>
        <div className="bottom">
          <h2>{article?.title}</h2>
          <img src={`http://localhost:4001/${article?.image}`} alt="article image" />
          <div className="content">
            <h4>Summary:</h4>
            <p>{article?.summary}</p>
            <h4>Content:</h4>
            <div className="articleContent" dangerouslySetInnerHTML={{ __html: article?.content }} />
            <p className="createdAt">Posted on {formattedDate}</p>
          </div>
        </div>
      </DetailsStyle>
    </>

  )
}
