import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import AfficherHoraireDeveloppeur from './Components/HorairesTravail/AfficherHoraireDeveloppeur';
import AvisProjet from './Components/Projets/AvisProjet';
import AfficherTicket from './Components/Tickets/AfficherTickets';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dashboard= () => {
  let userConnecte=JSON.parse(localStorage.getItem('user'))
  let role=userConnecte.role
  
  const showToastMessage = () => {
    toast.error('Email/Password incorrect !', {
        position: toast.POSITION.TOP_RIGHT
    });
};

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

      let resultat=result.data.user
      if(resultat!=''){
        window.location.href='/dashboard'
      }
      else{
        
       showToastMessage()
      }

   })

  };

  return (
    <div>
       <ToastContainer />
       {/****/}
     
      {role=='chef Projet' && 
        <AfficherHoraireDeveloppeur />
        }
    
      {role=='administrateur' && 
        <AfficherHoraireDeveloppeur />
        }

{role=='developpeur' && 
        <AfficherTicket />
        }
        {role=='utilisateur' && 
        <Navbar />
        }
          {role=='client' && 
        <AvisProjet />
        }
    </div>
  );
};

export default Dashboard;
