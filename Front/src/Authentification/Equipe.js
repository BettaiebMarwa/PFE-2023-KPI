import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const EquipeForm = () => {
  const [nomEquipe, setNomEquipe] = useState('');
  const [titreEquipe, setTitreEquipe] = useState('');
  const [listeRoles] = useState(['Chef de Projet', 'Développeur', 'Designer', 'Testeur']);
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici votre logique de gestion du formulaire
    console.log("Nom de l'équipe:", nomEquipe);
    console.log("Titre de l'équipe:", titreEquipe);
    console.log("Rôle:", role);
    // Réinitialisez les champs après la soumission du formulaire
    setNomEquipe('');
    setTitreEquipe('');
    setRole('');
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Formulaire d'Équipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nomEquipe" className="form-label">Nom de l'équipe:</label>
          <input
            type="text"
            className="form-control"
            id="nomEquipe"
            value={nomEquipe}
            onChange={(e) => setNomEquipe(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="titreEquipe" className="form-label">Titre de l'équipe:</label>
          <input
            type="text"
            className="form-control"
            id="titreEquipe"
            value={titreEquipe}
            onChange={(e) => setTitreEquipe(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Rôle:</label>
          <select
            className="form-select"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Sélectionnez un rôle</option>
            {listeRoles.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
};

export default EquipeForm;
