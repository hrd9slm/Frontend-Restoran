import React from "react";

import { Container } from "react-bootstrap";
import Navigation from "../component/Navigation";

import ListeArticles from "../component/ListAricles";
import Footer from "../component/Footer";

function ShowArticlePage() {
  return (
    <>
      <Navigation />
      <Container className="m-4 mx-auto">
        <ListeArticles />
      </Container>
      <Footer />
    </>
  );
}

export default ShowArticlePage;
