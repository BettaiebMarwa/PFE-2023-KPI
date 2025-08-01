import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AjoutTicket= () => {
  const [developpeurs,setDeveloppeurs]=useState([])
  const showToastMessage = () => {
    toast.success('Ticket Ajouté avec succée ! ', {
        position: toast.POSITION.TOP_RIGHT
    });
};

// get Equipes
async function getDeveloppeurs(){
  await axios.get("http://localhost:5000/Developpeur/Afficher").then(result=>{

      let resultat=result.data.developpeurs
      if(resultat!=''){
      setDeveloppeurs(resultat)
        console.log(resultat)
      
      }
      
   })
}

// use Effect 
useEffect(()=>{
  getDeveloppeurs()
},[])

 async function Add(e) {
    e.preventDefault();
    let form =document.getElementById('formTicket')
    const formdata=new FormData(form)
    let titre=formdata.get('titre') // let titre= nom Variable  .get('titre') c'est le nom de champ de form
    let description=formdata.get('description')
    let dateCreation=formdata.get('dateCreation')
    let finestimation=formdata.get('finestimation')
    let finreel=formdata.get('finreel')
    let statut=formdata.get('statusTicket')
    let developpeur=formdata.get('developpeur')
   
    // objet ticket où on va créer l'objet a envoyé vers le back
   let ticket={titre_ticket:titre,description:description,date_creation:dateCreation,date_fin_estimee:finestimation,date_fin_reelle:finreel,statut:statut,developpeur:developpeur}
   console.log('Tickettttttttttttttt')
   console.log(ticket)
   // axios
   await axios.post("http://localhost:5000/Ticket/Ajout",ticket).then(result=>{

      let resultat=result.data.ticket
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
      
      <h2 className="text-center mb-4">Ajout Ticket</h2>
      <form onSubmit={Add} id='formTicket'>
      <div className="mb-3">
          <label htmlFor="equipe" className="form-label">Développeur:</label>
          <select className="form-control" id="equipe" name='developpeur'>
                {developpeurs.map((cle,index)=>(
                      <option value={cle.id_developpeur } >{cle.nom}</option>
                  ))}
            </select>
        </div>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">Titre:</label>
          <input type="text" className="form-control" id="titre" name='titre' />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description :</label>
          <input type="text" className="form-control" id="desc" name='description' />
        </div>

        <div className="mb-3">
          <label htmlFor="dateCreation" className="form-label">Date Création :</label>
          <input type="date" className="form-control" id="dateCreation" name='dateCreation' />
        </div>
       
        <div className="mb-3">
          <label htmlFor="dateFin" className="form-label">Date Fin estimation :</label>
          <input type="date" className="form-control" id="dateFin" name='finestimation' />
        </div>
        <div className="mb-3">
          <label htmlFor="dateFinReel" className="form-label">date Fin reel :</label>
          <input type="date" className="form-control" id="dateFinReel" name='finreel' />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status :</label>
          <select  className="form-control" id="status" name='statusTicket' >
              <option>En cours</option>
              <option>En pause</option>
              <option>Terminé</option>
            </select>
        </div>
        <button type="submit" className="btn btn-primary">Créer</button>
      </form>
    </div>
   
    </div>
  );
};

export default AjoutTicket;
