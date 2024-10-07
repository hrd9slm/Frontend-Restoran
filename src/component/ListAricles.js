import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useArticlesContext } from '../contextApi/ArticlesContext';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ListeArticles({ category }) {
  const { articles, deleteArticle, updateArticle } = useArticlesContext();
  const query = useQuery();
  const keyword = query.get('keyword') ;

  const [show, setShow] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (article) => {
    setSelectedArticle(article);
    setShow(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedArticle = {
      id: selectedArticle.id,
      title: e.target.title.value,
      description: e.target.description.value,
      image: e.target.image.value,
      category: e.target.category.value,
      state: e.target.state.value
    };
    updateArticle(selectedArticle.id, updatedArticle);
    setShow(false);
  };

  const filteredArticles = articles.filter(article => {
    const matchesCategory = category ? article.category === category : true;
    const matchesKeyword = keyword ? 
      article.title.toLowerCase().includes(keyword.toLowerCase()) || 
      article.description.toLowerCase().includes(keyword.toLowerCase()) 
      : true;
    return matchesCategory && matchesKeyword;
  });


  return (
    <>
     <Row  className="mb-3">    
          {filteredArticles.map((article) => (
            <Col key={article.id} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={article.image}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to={`/article/${article.id}`} className="card-link">+View</Link>
                  <Card.Link href="#" onClick={() => handleShow(article)}>Update</Card.Link>
                  <Card.Link href="#" onClick={() => deleteArticle(article.id)}>Delete</Card.Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedArticle && (
            <Form onSubmit={handleUpdate}>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={selectedArticle.title}
                  name="title"
                />
              </Form.Group>

              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  defaultValue={selectedArticle.description}
                  name="description"
                />
              </Form.Group>

              <Form.Group controlId="formImage">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={selectedArticle.image}
                  name="image"
                />
              </Form.Group>

              <Form.Group controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={selectedArticle.category}
                  name="category"
                >
                  {articles.map((cat) => (
                    <option key={cat.id} value={cat.category}>
                      {cat.category}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={selectedArticle.state}
                  name="state"
                >
                  <option value="new">New</option>
                  <option value="best">Best</option>
                  <option value="normal">Normal</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Update Article
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ListeArticles;
