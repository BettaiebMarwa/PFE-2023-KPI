import axios from 'axios';
import React, { useState,useEffect } from 'react';
import './assets/css/material-dashboard.css'
import './assets/demo/demo.css'
const NavbarClient= () => {

let userConnecte=JSON.parse(localStorage.getItem('user'))

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

  return (
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary"  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{width: '90%'}}>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/dashboard">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Ticket/Afficher">Consultation des tickets</a>
          </li>
          
          <li class="nav-item">
          <a class="nav-link " href="/Developpeur/Afficher" >
            Consulter profils Développeurs
          </a>
          
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
   
  );
};

export default NavbarClient;
