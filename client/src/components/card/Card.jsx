import { useEffect, useState } from "react";
import { CardStyle } from "./StyledCard";
import { format } from 'date-fns';
import {Link} from "react-router-dom"

export default function Card({article}) {
    const [firstLetter, setFirstLetter] = useState()
    useEffect(() => {
        if (article?.author) {
          setFirstLetter(article.author.username.charAt(0));
        }
      }, [article]);

      const token = localStorage.getItem("ACCESS_TOKEN")
    
  return (
    <Link to={token ? `/auth/details/${article?._id}` : `/details/${article?._id}`} style={{color:"black"}}>
    <CardStyle>
        <div className="top">
            <img src={`http://localhost:4001/${article?.image}`} alt="article image" />
            <div className="content">
            <h3>{article?.title}</h3>
            <p>{article?.summary.substring(0, 200)}...</p>
            </div>
        </div>
        <div className="bottom">
            <div className="profile">{firstLetter}</div>
            <div className="author">
                <p className="name">{article?.author.username}</p>
                <span className="date">Posted on {format(new Date(article?.createdAt), 'yyyy-MM-dd HH:mm')}</span>
            </div>
        </div>
    </CardStyle>
    </Link>
  )
}
