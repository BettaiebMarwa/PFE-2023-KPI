import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Equipes= () => {

  const showToastMessage = () => {
    toast.success('Equipe Ajouté avec succée ! ', {
        position: toast.POSITION.TOP_RIGHT
    });
};

 async function AddEquipe(e) {
    e.preventDefault();
    let form =document.getElementById('formEquipe')
    const formdata=new FormData(form)
    let nom=formdata.get('nom')
    let titre=formdata.get('titre')
   
   let equipe={nom_equipe:nom,Titre_equipe:titre}
   console.log(equipe)
   // axios
   await axios.post("http://localhost:5000/Equipe/Ajout",equipe).then(result=>{

      let resultat=result.data.equipe
      if(resultat!=''){
       showToastMessage()
        console.log(resultat)
      
      }
      

   })

  };

  return (
    <div>
       <ToastContainer />
       
      <Navbar/>
     
    <div className="container">
      
      <h2 className="text-center mb-4">Ajout Equipe</h2>
      <form onSubmit={AddEquipe} id='formEquipe'>
        
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom:</label>
          <input
            type="text"
            className="form-control"
            id="nom"
            name='nom'
            />
        </div>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">Titre de l'equipe :</label>
          <input
            type="text"
            className="form-control"
            id="titre"
            name='titre'
          />
        </div>
        <button type="submit" className="btn btn-primary">Valider</button>
      </form>
    </div>
   
    </div>
  );
};

export default Equipes;
