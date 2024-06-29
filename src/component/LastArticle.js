import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'; 
import React from 'react';

import { useArticlesContext } from '../contextApi/ArticlesContext';

function LastArticle() {
  const { articles } = useArticlesContext();

  const newArticles = articles.filter(article => article.state === "new");

  return (
    <Carousel style={{ maxHeight: '450px', overflow: 'hidden' }}>
      {newArticles.slice(0, 3).map(article => (
        <Carousel.Item key={article.id}>
          <img
            className="d-block w-100"
            src={article.image}
            alt={`Slide ${article.id}`}
            style={{ maxHeight: '450px', objectFit: 'cover', width: '100%', height: '450px' }}
          />
          <Carousel.Caption>
          <h3>
              <Link to={`/article/${article.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                {article.title}
              </Link>
            </h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default LastArticle;