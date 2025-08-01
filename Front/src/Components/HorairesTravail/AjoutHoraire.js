import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AjoutHoraire= () => {
  const [tickets,setTickets]=useState([])
  const showToastMessage = () => {
    toast.success('Horaire de travail Ajouté avec succée ! ', {
        position: toast.POSITION.TOP_RIGHT
    });
};


async function getTickets(){
  await axios.get("http://localhost:5000/Ticket/Afficher").then(result=>{

      let resultat=result.data.tickets
      if(resultat!=''){
      setTickets(resultat)
        console.log(resultat)
      
      }
      
   })
}

// use Effect 
useEffect(()=>{
  getTickets()
},[])

 async function Ajout(e) {
    e.preventDefault();
    let form =document.getElementById('formhoraire')
    const formdata=new FormData(form)
    let date_debut=formdata.get('date_debut')
    let date_fin=formdata.get('date_fin')
    let temps_passe=formdata.get('temps_passe')
   let estime_temps=formdata.get('estime_temps')
   let ticket=formdata.get('ticket')
   let horaire={date_debut:date_debut,date_fin:date_fin,temps_passe:temps_passe,estime_temps:estime_temps,ticket:ticket}
   console.log(horaire)
   // axios
   await axios.post("http://localhost:5000/Horaire/Ajout",horaire).then(result=>{

      let resultat=result.data.horaire
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
      
      <h2 className="text-center mb-4">Ajout Horaire de travail</h2>
      <form onSubmit={Ajout} id='formhoraire'>
      <div className="mb-3">
          <label htmlFor="equipe" className="form-label">Ticket:</label>
          <select className="form-control" id="equipe" name='ticket'>
                {tickets.map((cle,index)=>(
                      <option value={cle.id } >{cle.description}</option>
                  ))}
            </select>
        </div>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Date de but:</label>
          <input
            type="date"
            className="form-control"
            id="nom"
            name='date_debut'
            />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Date Fin :</label>
          <input
            type="date"
            className="form-control"
            id="email"
            name='date_fin'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mdp" className="form-label">temps passe :</label>
          <input
            type="time"
            className="form-control"
            id="mdp"
            name='temps_passe'
          />
        </div>

        <div className="mb-3">
          <label htmlFor="estime_temps" className="form-label">temps Estimé :</label>
          <input
            type="time"
            className="form-control"
            id="estime_temps"
            name='estime_temps'
          />
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
   
    </div>
  );
};

export default AjoutHoraire;
