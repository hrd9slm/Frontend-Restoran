import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

function Category({ category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${category.title}`, { state: { category: category.title } });
  };

  return (
    <>
      <Col className='mt-5 d-flex flex-column align-items-center' onClick={handleClick}>
        <Image 
          src={category.image} 
          className="category-image"  
        />
        <h6 className="mt-2 category-title">{category.title}</h6>
      </Col>
    </>
  );
}

export default Category;
