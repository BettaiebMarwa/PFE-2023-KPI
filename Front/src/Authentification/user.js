import axios from 'axios';
import React, { useState,useEffect } from 'react';
//import Navbar from '../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const User= () => {

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
      if(resultat!=null){
      
        console.log(resultat)
       
        localStorage.setItem('user',JSON.stringify(resultat))
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
       
      {/***<Navbar/>
     */}
    <div class="main-panel">
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Authentification</h4>
                
                </div>
                <div class="card-body">
                  <form onSubmit={handleSubmit} id='form'>
                  <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="bmd-label-floating">Vous êtes :</label>
                          <select name='role' class="form-control">
                          <option value="chef Projet">Chef de Projet</option>
                              <option value="client">Client</option>
                              <option value="developpeur">Développeur</option>
                              

                            </select>
                        </div>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Email:</label>
                          <input type="email" class="form-control"  id="email" name='email'/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Mot de passe:</label>
                          <input type="password" class="form-control"  id="motDePasse"   name='motDePasse'/>
                        </div>
                      </div>
                    </div>
                   
                  
                    <button type="submit" class="btn btn-primary">Se connecter</button>
                    <div class="clearfix"></div>
                  </form>
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

export default User;
