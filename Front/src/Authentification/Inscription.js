import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const InscriptionPage = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici votre logique de gestion de l'inscription
    console.log("Nom:", nom);
    console.log("Email:", email);
    console.log("Mot de passe:", motDePasse);
    // Réinitialisez les champs après la soumission du formulaire
    setNom('');
    setEmail('');
    setMotDePasse('');
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom:</label>
          <input
            type="text"
            className="form-control"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="motDePasse" className="form-label">Mot de passe:</label>
          <input
            type="password"
            className="form-control"
            id="motDePasse"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
};

export default InscriptionPage;
