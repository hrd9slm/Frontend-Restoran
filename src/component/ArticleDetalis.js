import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useArticlesContext } from '../contextApi/ArticlesContext';

function ArticleDetails() {
  const{id}=useParams();
 const {articles}=useArticlesContext();
  const article = articles.find((article) => article.id === id);
    if (!article) {
    return <p>Aucun article trouvé pour l'ID {id}</p>;
  }
  return (
    <Container className="mt-5 p-4 rounded bg-light">
      <Card>
        <Card.Img variant="top" src={article.image} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{article.state}</small>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default ArticleDetails;
