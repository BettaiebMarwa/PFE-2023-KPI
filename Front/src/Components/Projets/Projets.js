import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Projets= () => {
  const [equipes,setEquipes]=useState([])
  const [developpeurs,setDeveloppeurs]=useState([])
  const showToastMessage = () => {
    toast.success('Projet Ajouté avec succée ! ', {
        position: toast.POSITION.TOP_RIGHT
    });
};
// get Equipes
async function getEquipes(){
  await axios.get("http://localhost:5000/Equipe/Afficher").then(result=>{

      let resultat=result.data.equipes
      if(resultat!=''){
      setEquipes(resultat)
        console.log(resultat)
      
      }
      
   })
}
// get Developpeurs
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
    getEquipes();
    getDeveloppeurs()
},[])
 async function Ajout(e) {
    e.preventDefault();
    let form =document.getElementById('formProjet')
    const formdata=new FormData(form)
    let nom=formdata.get('nom')
    let description=formdata.get('description')
   let date_creation=formdata.get('date_creation')
   let date_fin_estimee=formdata.get('date_fin_estimee')
   let date_fin_relle=formdata.get('date_fin_relle')
   let equipe=formdata.get('equipe')
   let developpeur=formdata.get('developpeur')

   let projet={nom_projet:nom,description:description,date_creation:date_creation,date_fin_estimee:date_fin_estimee,date_fin_relle:date_fin_relle,equipe:equipe,developpeur:developpeur}
   console.log(projet)
   // axios
   // http://localhost:5000/Client/Ajout c'est l'api(YRL de back) pour ajouter client
   await axios.post("http://localhost:5000/Projet/Ajout",projet).then(result=>{

      let resultat=result.data.projet
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
      
      <h2 className="text-center mb-4">Ajout Projet</h2>
      <form onSubmit={Ajout} id='formProjet'>
      <div className="mb-3">
          <label htmlFor="equipe" className="form-label">Equipe:</label>
          <select className="form-control" id="equipe" name='equipe'>
                {equipes.map((cle,index)=>(
                      <option value={cle.id} >{cle.nom_equipe}</option>
                  ))}
            </select>
        </div>
        <div className="mb-3">
          <label htmlFor="developpeur" className="form-label">Developpeur:</label>
          <select className="form-control" id="developpeur" name='developpeur'>
                {developpeurs.map((cle,index)=>(
                      <option value={cle.id_developpeur } >{cle.nom}</option>
                  ))}
            </select>
        </div>
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
          <label htmlFor="email" className="form-label">Description :</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name='description'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mdp" className="form-label">date_creation:</label>
          <input
            type="date"
            className="form-control"
            id="mdp"
            name='date_creation'
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mdp" className="form-label">date_fin_estimee:</label>
          <input
            type="date"
            className="form-control"
            id="mdp"
            name='date_fin_estimee'
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mdp" className="form-label">date fin réel:</label>
          <input
            type="date"
            className="form-control"
            id="mdp"
            name='date_fin_relle'
          />
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
   
    </div>
  );
};

export default Projets;
