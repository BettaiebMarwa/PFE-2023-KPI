import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AjoutChefProjet= () => {

  const showToastMessage = () => {
    toast.success('Chef de projet Ajouté avec succée ! ', {
        position: toast.POSITION.TOP_RIGHT
    });
};

 async function Add(e) {
    e.preventDefault();
    let form =document.getElementById('formChefProjet')
    const formdata=new FormData(form)
    let nom=formdata.get('nom')
    let email=formdata.get('email')
    let mdp=formdata.get('mdp')
    
   
   let chef={nom:nom,email:email,mot_de_passe:mdp}
   console.log('chef')
   console.log(chef)
   // axios
   await axios.post("http://localhost:5000/ChefProjet/Ajout",chef).then(result=>{

      let resultat=result.data.chefProjet
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
      
      <h2 className="text-center mb-4">Ajout Chef Projet</h2>
      <form onSubmit={Add} id='formChefProjet'>
        
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom:</label>
          <input type="text" className="form-control" id="nom" name='nom' />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email :</label>
          <input type="email" className="form-control" id="email" name='email' />
        </div>

        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">Mot de passe :</label>
          <input type="password" className="form-control" id="pwd" name='mdp' />
        </div>
       
       
        <button type="submit" className="btn btn-primary">jouter</button>
      </form>
    </div>
   
    </div>
  );
};

export default AjoutChefProjet;
