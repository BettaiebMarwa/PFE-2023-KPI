import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Discussions= () => {
  let userConnecte=JSON.parse(localStorage.getItem('user'))
  let email=userConnecte.email
  
  const showToastMessage = () => {
    toast.success('Message Ajouté avec succée ! ', {
        position: toast.POSITION.TOP_RIGHT
    });
};

 async function Ajout(e) {
  let dt=new Date()
  let date=dt.getDate()+'-'+Number(dt.getMonth()+1)+'-'+dt.getFullYear()
  let heure=dt.getHours()+':'+dt.getMinutes()
    e.preventDefault();
    let form =document.getElementById('formMsg')
    const formdata=new FormData(form)
    let message=formdata.get('message')
    
   
   let discussion={message:message,date:date,heure:heure,user:email,etat:'0'}
   console.log(discussion)
   // axios
   await axios.post("http://localhost:5000/Discussion/Ajout",discussion).then(result=>{

      let resultat=result.data.discussion
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
      
      <h2 className="text-center mb-4">Discussion</h2>
      <form onSubmit={Ajout} id='formMsg'>
        
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Message:</label>
          <input
            type="text"
            className="form-control"
            id="nom"
            name='message'
            />
        </div>
       
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
   
    </div>
  );
};

export default Discussions;
