import axios from 'axios';
import React, { useState,useEffect } from 'react';
import './assets/css/material-dashboard.css'
import './assets/demo/demo.css'
import NavbarChefProjet from './NavbarChefProjet';
import NavbarClient from './NavbarClient';

import NavbarAdmin from './NavbarAdmin';
import NavbarDeveloppeur from './NavbarDeveloppeur';
import NavbarUtilisateur from './NavbarUtilisateur';

const Navbar= () => {

let userConnecte=JSON.parse(localStorage.getItem('user'))
let role=userConnecte.role

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
    <div>
      
    {/*** Role Chef Projet */}
      {role=='chef Projet' && 
        <NavbarChefProjet />
        }
    {/*** Role Client */}
    {role=='client' && 
        <NavbarClient />
        }
     {/*** Role Administrateur */}
       {role=='administrateur' && 
        <NavbarAdmin />
        }
    {/*** Role Développeurs */}
     {role=='developpeur' && 
        <NavbarDeveloppeur />
        }
    {/*** Role utilisateur */}
       {role=='utilisateur' && 
        <NavbarUtilisateur />
        }
  </div>
  
  
   
  );
};

export default Navbar;
