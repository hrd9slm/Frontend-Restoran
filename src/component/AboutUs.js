import React from 'react'

function AboutUs() {
  return (
    <div className="about-us container mt-4">
      <h1 className="text-center mb-4">À Propos de Nous</h1>
      
      <div className="card mb-3">
        <div className="card-body">
          <h2 className="card-title">Notre Histoire</h2>
          <p className="card-text">
            Restoran a été fondé en 2024 par une équipe de passionnés de cuisine. Nous avons commencé ce blog avec l'objectif de partager notre amour pour la cuisine et de rendre les recettes accessibles à tous. Ce blog est le fruit de nombreuses heures passées en cuisine, à expérimenter et à perfectionner des recettes pour vous offrir le meilleur.
          </p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h2 className="card-title">Notre Mission</h2>
          <p className="card-text">
            Notre mission est simple : inspirer et éduquer nos lecteurs à travers des recettes délicieuses, faciles à suivre, et des astuces culinaires pratiques. Nous croyons que cuisiner doit être une expérience agréable et gratifiante, et nous sommes là pour vous aider à chaque étape du chemin.
          </p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h2 className="card-title">Les Fondateurs</h2>
          <p className="card-text">
            Derrière Restoran se trouvent :
          </p>
          <ul className="list-group">
            <li className="list-group-item">Alice Dupont - Chef de cuisine et rédactrice en chef</li>
            <li className="list-group-item">Bob Martin - Photographe culinaire et gestionnaire de contenu</li>
            <li className="list-group-item">Charlie Durand - Développeur web et designer</li>
          </ul>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h2 className="card-title">Contactez-Nous</h2>
          <p className="card-text">
            Nous adorons recevoir des retours de nos lecteurs. N'hésitez pas à nous contacter via notre formulaire de contact ou à nous suivre sur les réseaux sociaux pour rester informé de nos dernières recettes et nouveautés.
          </p>
        </div>
      </div>
    </div>
  );
}



export default AboutUs
