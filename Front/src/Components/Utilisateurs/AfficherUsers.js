import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AfficherUsers= () => {
const [users,setUsers]=useState([])
const [user,setUser]=useState([])
  const showToastMessage = () => {
    toast.success('Utilisateur Supprimé avec succée ! ', {
        position: toast.POSITION.TOP_RIGHT
       
    });
   
};

const Update = () => {
  toast.success('Utilisateur Modifié avec succée ! ', {
      position: toast.POSITION.TOP_RIGHT
     
  });
 
};
// get Clients
async function getUsers(){
  await axios.get("http://localhost:5000/Utilisateur/Afficher").then(result=>{

      let resultat=result.data.users
      if(resultat!=''){
        setUsers(resultat)
        console.log(resultat)
      
      }
      
   })
}
// delete Ticket
async function deleteUser(id){
  console.log('Id Equipe '+id)
  await axios.delete("http://localhost:5000/Utilisateur/delete/"+id).then(result=>{
   showToastMessage()
   getUsers()
   })
}
// get Detail User
async function detail(id){
  await axios.get("http://localhost:5000/Utilisateur/detail/"+id).then(result=>{

      let resultat=result.data.user
      if(resultat!=''){
        setUser(resultat)
     
        console.log(resultat)
      
      }
      
   })
}
// use Effect 
useEffect(()=>{
  getUsers()
},[])
 
/***********************Modifier Ticket ****************** */

async function Modifier(e) {
  e.preventDefault();
  let form =document.getElementById('formuser')
    const formdata=new FormData(form)
    let nom=formdata.get('nom')
    let email=formdata.get('email')
   let mdp=formdata.get('mdp')
   
    let id=formdata.get('id')
   let utilisateur={nom:nom,email:email,mot_de_passe:mdp}
   console.log(utilisateur)
    
 // axios
 await axios.put("http://localhost:5000/Utilisateur/Modifier/"+id,utilisateur).then(result=>{

    let resultat=result.data.equipe
    if(resultat!=''){
      Update()
      getUsers()
     
    
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
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier Utilisateur</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> 
      <form method='post' id='formuser'>
      <div class="modal-body">
       <input type='hidden' readOnly name="id" defaultValue={user.id}/>
          <div class="mb-3">
            <label for="nom" class="col-form-label">Nom:</label>
            <input type="text" defaultValue={user.nom} class="form-control" name='nom' id="nom"/>
          </div>
          <div className="mb-3">
          <label htmlFor="titre" className="form-label">Email :</label>
          <input type="text" className="form-control" defaultValue={user.email} id="titre" name='email' />
        </div>

        
        <div className="mb-3">
          <label htmlFor="mdp" className="form-label">Mot de passe :</label>
          <input
            type="password"
            className="form-control"
            id="mdp"
            name='mdp'
            defaultValue={user.mot_de_passe}
          />
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
                  <h4 class="card-title ">Liste Utilisateurs</h4>
                 
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
                      {users.map((cle,index)=>(
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
                           
                            <button class="btn btn-danger" onClick={()=>deleteUser(cle.id)}>
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

export default AfficherUsers;
