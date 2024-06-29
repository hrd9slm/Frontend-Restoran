import React from "react";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";
import LastArticle from "../component/LastArticle";
import Categories from "../component/Categories";
import ListCategories from "../component/ListCategories";

function HomePage() {
  return (
    <>
      <Navigation />
      <LastArticle />
     <ListCategories />
      <Categories /> 
      <Footer />
    </>
  );
}

export default HomePage;
