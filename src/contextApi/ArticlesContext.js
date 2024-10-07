import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ArticlesContext = createContext();

export const useArticlesContext = () =>useContext (ArticlesContext);

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/articles")
      .then((response) => {
        console.log("Articles retrieved:", response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });

    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        console.log("Categories retrieved:", response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);
  const deleteArticle = (id) => {
    axios
      .delete(`http://localhost:5000/articles/${id}`)
      .then((response) => {
        setArticles((prevArticles) =>
          prevArticles.filter((article) => article.id !== id)
        );
        toast.success("Article supprimé avec succès!");
      })
      .catch((error) => {
        console.error("Error deleting article:", error);
        toast.error("Erreur lors de la suppression de l'article.");
      });
  };
  const addArticle = (newArticle) => {
    axios
      .post("http://localhost:5000/articles", newArticle)
      .then((response) => {
        setArticles((prevArticles) => [...prevArticles, response.data]);
        toast.success("Article ajouté avec succès!");
      })
      .catch((error) => {
        console.error("Error adding article:", error);
        toast.error("Erreur lors de l'ajout de l'article.");
      });
  };
  const updateArticle = (id, updatedArticle) => {
    axios
      .put(`http://localhost:5000/articles/${id}`, updatedArticle)
      .then((response) => {
        setArticles((prevArticles) =>
          prevArticles.map((article) =>
            article.id === id ? response.data : article
          )
        );
        toast.success("Article mis à jour avec succès!");
      })
      .catch((error) => {
        console.error("Error updating article:", error);
        toast.error("Erreur lors de la mise à jour de l'article.");
      });
  };

  return (
    <ArticlesContext.Provider
      value={{ articles, categories, deleteArticle, addArticle, updateArticle }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
