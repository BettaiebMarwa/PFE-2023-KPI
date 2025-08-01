import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const TicketForm = () => {
  const [titreTicket, setTitreTicket] = useState('');
  const [description, setDescription] = useState('');
  const [dateCreation, setDateCreation] = useState('');
  const [dateFinEstimee, setDateFinEstimee] = useState('');
  const [dateFinReelle, setDateFinReelle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici votre logique de gestion du formulaire
    console.log("Titre du ticket:", titreTicket);
    console.log("Description:", description);
    console.log("Date de création:", dateCreation);
    console.log("Date de fin estimée:", dateFinEstimee);
    console.log("Date de fin réelle:", dateFinReelle);
    // Réinitialisez les champs après la soumission du formulaire
    setTitreTicket('');
    setDescription('');
    setDateCreation('');
    setDateFinEstimee('');
    setDateFinReelle('');
  };

  const handleDelete = () => {
    // Ajoutez ici votre logique de suppression du ticket
    console.log("Ticket supprimé");
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Formulaire de Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titreTicket" className="form-label">Titre du ticket:</label>
          <input
            type="text"
            className="form-control"
            id="titreTicket"
            value={titreTicket}
            onChange={(e) => setTitreTicket(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="dateCreation" className="form-label">Date de création:</label>
          <input
            type="date"
            className="form-control"
            id="dateCreation"
            value={dateCreation}
            onChange={(e) => setDateCreation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateFinEstimee" className="form-label">Date de fin estimée:</label>
          <input
            type="date"
            className="form-control"
            id="dateFinEstimee"
            value={dateFinEstimee}
            onChange={(e) => setDateFinEstimee(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateFinReelle" className="form-label">Date de fin réelle:</label>
          <input
            type="date"
            className="form-control"
            id="dateFinReelle"
            value={dateFinReelle}
            onChange={(e) => setDateFinReelle(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Ajouter</button>
          <button type="button" className="btn btn-secondary">Modifier</button>
          <button type="button" className="btn btn-danger" onClick={handleDelete}>Supprimer</button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
