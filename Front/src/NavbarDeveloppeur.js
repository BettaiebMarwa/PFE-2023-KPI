import axios from 'axios';
import React, { useState,useEffect } from 'react';
import './assets/css/material-dashboard.css'
import './assets/demo/demo.css'
const NavbarDeveloppeur= () => {

let userConnecte=JSON.parse(localStorage.getItem('user'))
const [discussions,setDiscussions]=useState([])
const [discussion,setDiscussion]=useState([])
async function logout(){
  localStorage.removeItem('user')
  window.location.href='/'
} 
 async function handleSubmit(e) {
    e.preventDefault();
    let form =document.getElementById('form')
    const formdata=new FormData(form)
    let email=formdata.get('email')
    let userRole=formdata.get('role')
    let mdp=formdata.get('motDePasse')
   let user={email:email,mdp:mdp,role:userRole}
   console.log(user)
   // axios
   await axios.post("http://localhost:5000/login",user).then(result=>{

      console.log(result.data.user)
   })

  };
  async function displayDiscussion(){
    await axios.get("http://localhost:5000/Discussion/Display").then(result=>{
  
        let resultat=result.data.discussion
        
        
     })
  }
  async function getDiscussion(){
    await axios.get("http://localhost:5000/Discussion/AfficherEtatNon").then(result=>{
  
        let resultat=result.data.discussions
        if(resultat!=''){
          setDiscussion(resultat)
          console.log(resultat)
        
        }
        
     })
  }
  async function getDiscussions(){
    await axios.get("http://localhost:5000/Discussion/Afficher").then(result=>{
  
        let resultat=result.data.discussions
        if(resultat!=''){
          setDiscussions(resultat)
          console.log(resultat)
        
        }
        
     })
  }
  // use Effect 
  useEffect(()=>{
    getDiscussion();
    getDiscussions()
  },[])
   

  return (
    <>
      {/**MOdal Message */}
      <div class="modal fade" id="ModalMessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content" style={{width:'800px'}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Liste Messages</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       {/****  Get Messages ** */}
       <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          Message
                        </th>
                        <th>
                          User
                        </th>
                        <th>
                          Date
                        </th>
                        <th>
                          Heure
                        </th>
                       
                       
                      </thead>
                      <tbody>
                      {discussions.map((cle,index)=>(
                        <tr>
                          <td>
                            {cle.message} 
                          </td>
                          <td>
                          {cle.user	}
                          </td>
                          <td>
                          {cle.date	}
                          </td>
                          <td>
                          {cle.heure	}
                          </td>
                         
                         
                          
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              

       {/** Fin Get Message */}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

    {/****** Fin Modal Message  */}
    <nav class="navbar navbar-expand-lg bg-body-tertiary"  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{width: '90%'}}>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Traiter les tickets
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/Ticket">Ajout</a></li>
            <li><a class="dropdown-item" href="/Ticket/Afficher">Consulter</a></li>
          </ul>
        </li>
        
          
          <li class="nav-item ">
          <a class="nav-link" href="/Clients/Afficher" >
            Consulter les  Clients
          </a>
          
        </li>
         
        <li class="nav-item dropdown">
          <a class="nav-link" href="/Discussion">
          Envoyer message
          </a>
         
        </li>
        <li class="nav-item">
         {discussions.length>0 && 
            <a class="nav-link" href="" onClick={displayDiscussion}   data-bs-toggle="modal" data-bs-target="#ModalMessage" style={{width:'40px',height:'50px',borderRadius:'50%',textAlign:'center',fontSize:'18px'}}>{discussion.length}</a>
         }
         {discussions.length==0 && 
            <a class="nav-link" href="#"  style={{width:'40px',height:'50px',borderRadius:'50%',textAlign:'center',fontSize:'18px'}}>{discussion.length}</a>
         }
         </li> 
        </ul>
        
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{float: 'right',position:'relative',right:'50px'}} >
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {userConnecte.nom} {userConnecte.nom_client}
                </a>
                <ul class="dropdown-menu" >
                  <li><a class="dropdown-item" href="#">{userConnecte.role}</a></li>
                  <li><a class="dropdown-item" href="#" onClick={logout}>Déconnexion</a></li>
                 
                </ul>
              </li>

          </ul>
        
         
       
      </div>
    </div>
     </nav>

   </>
  );
};

export default NavbarDeveloppeur;
