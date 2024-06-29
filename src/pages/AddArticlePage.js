import React from 'react';
import Navigation from "../component/Navigation";

import Container from 'react-bootstrap/Container';
import AddArticle from '../component/AddArticle';
import Footer from '../component/Footer';

function AddArticlePage() {
  return (
    <>
      <Navigation />
      <Container className="mt-5">
    <AddArticle/>
      </Container>
  <Footer/>
    </>
  );
}

export default AddArticlePage;
