import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Developpeurs= () => {
const [equipes,setEquipes]=useState([])
  const showToastMessage = () => {
    toast.success('Développeur Ajouté avec succée ! ', {
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
// use Effect 
useEffect(()=>{
    getEquipes()
},[])
 async function Add(e) {
    e.preventDefault();
    let form =document.getElementById('formDeveloppeur')
    const formdata=new FormData(form)
    let nom=formdata.get('nom')
    let equipe=formdata.get('equipe')
    let email=formdata.get('email')
    let mdp=formdata.get('mdp')
    let poste=formdata.get('poste')
   
   let developpeur={nom:nom,equipe:equipe,email:email,mot_de_passe:mdp,poste:poste}
   console.log(developpeur)
   // axios
   await axios.post("http://localhost:5000/Developpeur/Ajout",developpeur).then(result=>{

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
      
      <h2 className="text-center mb-4">Ajout Développeur</h2>
      <form onSubmit={Add} id='formDeveloppeur'>
        
        <div className="mb-3">
          <label htmlFor="equipe" className="form-label">Equipe:</label>
          <select className="form-control" id="equipe" name='equipe'>
                {equipes.map((cle,index)=>(
                      <option value={cle.id} >{cle.nom_equipe}</option>
                  ))}
            </select>
        </div>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom :</label>
          <input type="text" className="form-control" id="nom" name='nom' />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email :</label>
          <input type="email" className="form-control" id="email" name='email' />
        </div>
       
        <div className="mb-3">
          <label htmlFor="mdp" className="form-label">Mot de passe :</label>
          <input type="password" className="form-control" id="mdp" name='mdp' />
        </div>
        <div className="mb-3">
          <label htmlFor="poste" className="form-label">Poste :</label>
          <input type="text" className="form-control" id="poste" name='poste' />
        </div>
        <button type="submit" className="btn btn-primary">Valider</button>
      </form>
    </div>
   
    </div>
  );
};

export default Developpeurs;
