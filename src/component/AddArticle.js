import React, { useState } from "react";
import { useArticlesContext } from "../contextApi/ArticlesContext";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";

function AddArticle() {
  const { addArticle, categories } = useArticlesContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState(categories[0]?.name || "");
  const [state, setState] = useState("new");
  const perset=process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
  const name=process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    formData.append("file", image);
    formData.append(
      "upload_preset",
      perset
    );
    const img = await axios.post(
      `https://api.cloudinary.com/v1_1/${name}/upload`,
      formData
    );
    const newArticle = { title, description, image:img.data.secure_url, category, state };

    addArticle(newArticle);
    setTimeout(() => {
      navigate("/");
    }, 1000);
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
            type="file"
            placeholder="Enter image URL"
           
            onChange={(e) => setImage(e.target.files[0])}
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
