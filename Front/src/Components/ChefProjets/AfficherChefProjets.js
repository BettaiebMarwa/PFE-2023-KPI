import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AfficherChefProjet= () => {
const [chefProjets,setChefsProjets]=useState([])
const [chefProjet,setChefProjet]=useState([])
  const showToastMessage = () => {
    toast.success('Chef Projet Supprimé avec succée ! ', {
        position: toast.POSITION.TOP_RIGHT
       
    });
   
};

const Update = () => {
  toast.success('Chef Projet Modifié avec succée ! ', {
      position: toast.POSITION.TOP_RIGHT
     
  });
 
};
// get Tickets
async function getChefProjets(){
  await axios.get("http://localhost:5000/ChefProjet/Afficher").then(result=>{

      let resultat=result.data.chefProjets
      if(resultat!=''){
        setChefsProjets(resultat)
        console.log(resultat)
      
      }
      
   })
}
// delete Ticket
async function deleteChefProjet(id){
  await axios.delete("http://localhost:5000/ChefProjet/delete/"+id).then(result=>{
   showToastMessage()
   getChefProjets()
   })
}
// get Detail Ticket
async function detail(id){
  await axios.get("http://localhost:5000/ChefProjet/detail/"+id).then(result=>{

      let resultat=result.data.chefProjet
      if(resultat!=''){
        setChefProjet(resultat)
     
        console.log(resultat)
      
      }
      
   })
}
// use Effect 
useEffect(()=>{
  getChefProjets()
},[])
 
/***********************Modifier Ticket ****************** */

async function Modifier(e) {
  e.preventDefault();
  let form =document.getElementById('formChefProjet')
    const formdata=new FormData(form)
    let nom=formdata.get('nom')
    let email=formdata.get('email')
    let mdp=formdata.get('mdp')
    let id=formdata.get('id')
   
   let chef={nom:nom,email:email,mot_de_passe:mdp}
console.log('Chef')
 console.log(chef)
 // axios
 await axios.put("http://localhost:5000/ChefProjet/Modifier/"+id,chef).then(result=>{

    let resultat=result.data.chefProjet
    if(resultat!=''){
      Update()
      getChefProjets()
     
    
    }
 })

};

/**************************************************** */
  return (
    <div>
       <ToastContainer />
       
      <Navbar/>
     {/********* Modal Update Ticket ********** */}


<div class="modal fade" id="ModalUpdate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier Chef Projet</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> 
      <form method='post' id='formChefProjet'>
      <div class="modal-body">
       <input type='hidden' readOnly name="id" defaultValue={chefProjet.id}/>
          <div class="mb-3">
            <label for="nom" class="col-form-label">Nom:</label>
            <input type="text" defaultValue={chefProjet.nom} class="form-control" name='nom' id="nom"/>
          </div>
          <div className="mb-3">
          <label htmlFor="email" className="form-label">Email :</label>
          <input type="email" className="form-control" defaultValue={chefProjet.email} id="email" name='email' />
        </div>

        <div className="mb-3">
          <label htmlFor="mdp" className="form-label">Mot de passe :</label>
          <input type="password" className="form-control" defaultValue={chefProjet.mot_de_passe} id="mdp" name='mdp' />
        </div>
       
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="submit" class="btn btn-primary" onClick={Modifier}>Modifier</button>
      </div> 
      </form>
    </div>
  </div>
</div>

     {/***** Fin Modal ****** */}
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Chefs des Projets</h4>
                 
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          ID
                        </th>
                        <th>
                          Nom
                        </th>
                        <th>
                          Email
                        </th>
                       
                        <th style={{textAlign:'cender'}}>Action      </th>
                      </thead>
                      <tbody>
                      {chefProjets.map((cle,index)=>(
                        <tr>
                          <td>
                            {index+1}
                          </td>
                          <td>
                          {cle.nom	}
                          </td>
                          <td>
                          {cle.email	}
                          </td>
                         
                           <td class="td-actions text-left">
                           <button class="btn btn-warning" onClick={()=>detail(cle.id)} style={{margin:'0 10px 0 0'}} data-bs-toggle="modal" data-bs-target="#ModalUpdate">
                              Modifier
                              
                          </button>
                           
                            <button class="btn btn-danger" onClick={()=>deleteChefProjet(cle.id)}>
                              Supprimer
                              
                          </button>
                            </td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
           </div>
        </div>
      </div>
   
    </div>
  );
};

export default AfficherChefProjet;
