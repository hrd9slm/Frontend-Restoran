import React, { useState } from "react";
import { useArticlesContext } from "../contextApi/ArticlesContext";
import { useNavigate } from "react-router-dom"; 
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function AddArticle() {
  const { addArticle, categories } = useArticlesContext();
  const navigate = useNavigate(); 

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState(categories[0]?.name || "");
  const [state, setState] = useState("new");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { title, description, image, category, state };
    addArticle(newArticle);
    navigate("/");
  };

  return (
    <Container className="mb-3">
      <h2>Ajouter un nouvel article</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle" className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDescription" className="mt-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formImage" className="mt-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCategory" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.title}>
                {cat.title}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formState" className="mt-3">
          <Form.Label>State</Form.Label>
          <Form.Control
            as="select"
            value={state}
            onChange={(e) => setState(e.target.value)}
            
          >
            <option value="new">New</option>
            <option value="best">Best</option>
            <option value="normal">Normal</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 mb-5">
          Add Article
        </Button>
      </Form>
    </Container>
  );
}

export default AddArticle;
