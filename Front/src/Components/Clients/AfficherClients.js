import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AfficherClients= () => {
  let userConnecte=JSON.parse(localStorage.getItem('user'))
let role=userConnecte.role
const [clients,setClients]=useState([])
const [client,setClient]=useState([])
  const showToastMessage = () => {
    toast.success('Client Supprimé avec succée ! ', {
        position: toast.POSITION.TOP_RIGHT
       
    });
   
};

const Update = () => {
  toast.success('Client Modifié avec succée ! ', {
      position: toast.POSITION.TOP_RIGHT
     
  });
 
};
// get Clients
async function getClients(){
  await axios.get("http://localhost:5000/Client/Afficher").then(result=>{

      let resultat=result.data.clients
      if(resultat!=''){
        setClients(resultat)
        console.log(resultat)
      
      }
      
   })
}
// delete Ticket
async function deleteClient(id){
  await axios.delete("http://localhost:5000/Client/delete/"+id).then(result=>{
   showToastMessage()
   getClients()
   })
}
// get Detail Ticket
async function detail(id){
  await axios.get("http://localhost:5000/Client/detail/"+id).then(result=>{

      let resultat=result.data.client
      if(resultat!=''){
        setClient(resultat)
     
        console.log(resultat)
      
      }
      
   })
}
// use Effect 
useEffect(()=>{
  getClients()
},[])
 
/***********************Modifier Ticket ****************** */

async function Modifier(e) {
  e.preventDefault();
  let form =document.getElementById('formClient')
    const formdata=new FormData(form)
    let nom=formdata.get('nom')
    let email=formdata.get('email')
    let mdp=formdata.get('mdp')
    let id=formdata.get('id')
   
   let client={nom_client:nom,email:email,mot_de_passe:mdp}

 // axios
 await axios.put("http://localhost:5000/Client/Modifier/"+id,client).then(result=>{

    let resultat=result.data.client
    if(resultat!=''){
      Update()
      getClients()
     
    
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
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier Client</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> 
      <form method='post' id='formClient'>
      <div class="modal-body">
       <input type='hidden' readOnly name="id" defaultValue={client.id}/>
          <div class="mb-3">
            <label for="nom" class="col-form-label">Nom:</label>
            <input type="text" defaultValue={client.nom_client} class="form-control" name='nom' id="nom"/>
          </div>
          <div className="mb-3">
          <label htmlFor="email" className="form-label">Email :</label>
          <input type="email" className="form-control" defaultValue={client.email} id="email" name='email' />
        </div>

        <div className="mb-3">
          <label htmlFor="mdp" className="form-label">Mot de passe :</label>
          <input type="password" className="form-control" defaultValue={client.mot_de_passe} id="mdp" name='mdp' />
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
                  <h4 class="card-title ">Clients</h4>
                 
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
                       
                        {role!='developpeur'  &&  <th style={{textAlign:'cender'}}>Action      </th>}
                      </thead>
                      <tbody>
                      {clients.map((cle,index)=>(
                        <tr>
                          <td>
                            {index+1}
                          </td>
                          <td>
                          {cle.nom_client	}
                          </td>
                          <td>
                          {cle.email	}
                          </td>
                          {role!='developpeur' && 
                           <td class="td-actions text-left">
                           <button class="btn btn-warning" onClick={()=>detail(cle.id)} style={{margin:'0 10px 0 0'}} data-bs-toggle="modal" data-bs-target="#ModalUpdate">
                              Modifier
                              
                          </button>
                           
                            <button class="btn btn-danger" onClick={()=>deleteClient(cle.id)}>
                              Supprimer
                              
                          </button>
                            </td>
                  }
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

export default AfficherClients;
