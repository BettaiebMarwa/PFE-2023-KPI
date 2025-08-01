import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AfficherEquipes= () => {
const [equipes,setEquipes]=useState([])
const [equipe,setEquipe]=useState([])
  const showToastMessage = () => {
    toast.success('Equipe Supprimé avec succée ! ', {
        position: toast.POSITION.TOP_RIGHT
       
    });
   
};

const Update = () => {
  toast.success('Equipe Modifié avec succée ! ', {
      position: toast.POSITION.TOP_RIGHT
     
  });
 
};
// get Clients
async function getEquipes(){
  await axios.get("http://localhost:5000/Equipe/Afficher").then(result=>{

      let resultat=result.data.equipes
      if(resultat!=''){
        setEquipes(resultat)
        console.log(resultat)
      
      }
      
   })
}
// delete Ticket
async function deleteEquipe(id){
  console.log('Id Equipe '+id)
  await axios.delete("http://localhost:5000/Equipe/delete/"+id).then(result=>{
   showToastMessage()
   getEquipes()
   })
}
// get Detail Ticket
async function detail(id){
  await axios.get("http://localhost:5000/Equipe/detail/"+id).then(result=>{

      let resultat=result.data.equipe
      if(resultat!=''){
        setEquipe(resultat)
     
        console.log(resultat)
      
      }
      
   })
}
// use Effect 
useEffect(()=>{
  getEquipes()
},[])
 
/***********************Modifier Ticket ****************** */

async function Modifier(e) {
  e.preventDefault();
  let form =document.getElementById('formDeveloppeur')
    const formdata=new FormData(form)
    let nom=formdata.get('nom')
    let titre=formdata.get('titre')
   
    let id=formdata.get('id')
   
    let equipe={nom_equipe:nom,Titre_equipe:titre}
console.log('Developpeur ')
console.log(equipe)
 // axios
 await axios.put("http://localhost:5000/Equipe/Modifier/"+id,equipe).then(result=>{

    let resultat=result.data.equipe
    if(resultat!=''){
      Update()
      getEquipes()
     
    
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
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier Développeur</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> 
      <form method='post' id='formDeveloppeur'>
      <div class="modal-body">
       <input type='hidden' readOnly name="id" defaultValue={equipe.id}/>
          <div class="mb-3">
            <label for="nom" class="col-form-label">Nom:</label>
            <input type="text" defaultValue={equipe.nom_equipe} class="form-control" name='nom' id="nom"/>
          </div>
          <div className="mb-3">
          <label htmlFor="titre" className="form-label">Titre :</label>
          <input type="text" className="form-control" defaultValue={equipe.Titre_equipe} id="titre" name='titre' />
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
                  <h4 class="card-title ">Equipes</h4>
                 
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
                          Titre
                        </th>
                       
                        <th style={{textAlign:'cender'}}>Action      </th>
                      </thead>
                      <tbody>
                      {equipes.map((cle,index)=>(
                        <tr>
                          <td>
                            {index+1} 
                          </td>
                          <td>
                          {cle.nom_equipe	}
                          </td>
                          <td>
                          {cle.Titre_equipe	}
                          </td>
                         
                         
                           <td class="td-actions text-left">
                           <button class="btn btn-warning" onClick={()=>detail(cle.id)} style={{margin:'0 10px 0 0'}} data-bs-toggle="modal" data-bs-target="#ModalUpdate">
                              Modifier
                              
                          </button>
                           
                            <button class="btn btn-danger" onClick={()=>deleteEquipe(cle.id)}>
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

export default AfficherEquipes;
