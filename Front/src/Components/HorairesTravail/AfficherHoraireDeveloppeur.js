import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AfficherHoraireDeveloppeur= () => {
  let userConnecte=JSON.parse(localStorage.getItem('user'))
  let role=userConnecte.role
const [horaires,setHoraires]=useState([])
const [user,setUser]=useState([])
const [discussions,setDiscussion]=useState([])
const Vider = () => {
  toast.success('Historique Supprimé  avec succée ! ', {
      position: toast.POSITION.TOP_RIGHT
     
  });
 
};
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
// get Horaires
async function getHoraires(){
  await axios.get("http://localhost:5000/Horaire/Afficher").then(result=>{

      let resultat=result.data.horaires
      if(resultat!=''){
        setHoraires(resultat)
        console.log(resultat)
      
      }
      
   })
}
async function getDiscussion(){
  await axios.get("http://localhost:5000/Discussion/Afficher").then(result=>{

      let resultat=result.data.discussions
      if(resultat!=''){
        setDiscussion(resultat)
        console.log(resultat)
      
      }
      
   })
}

async function ViderHistorique(){
  await axios.get("http://localhost:5000/Discussion/deleteAll").then(result=>{

      let resultat=result.data.discussion
      if(resultat!=''){
        
        console.log(resultat)
        Vider()
       
      
      }
      
   })
}

// use Effect 
useEffect(()=>{
  getHoraires();
  getDiscussion()
},[])
 
/***********************Modifier Ticket ****************** */



/**************************************************** */
  return (
    <div>
       <ToastContainer />
       
      <Navbar/>
     {/********* Modal Update Ticket ********** */}
     
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

     {/***** Fin Modal ****** */}
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Horaire de travail</h4>
                 
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          Développeur
                        </th>
                        <th>
                         Poste
                        </th>
                        <th>
                         Titre ticket
                        </th>
                        <th>
                         Description
                        </th>
                        <th>
                          Date création 
                        </th>
                        <th>
                          Date fin réel 
                        </th>
                        <th>
                          Status
                        </th>
                     <th>Resultat</th>
                       </thead>
                      <tbody>
                      {horaires.map((cle,index)=>(
                        <tr>
                          <td>
                            {cle.nom} 
                          </td>
                          <td>
                          {cle.poste	}
                          </td>
                          <td>
                          {cle.titre_ticket	}
                          </td>
                         
                          <td>
                          {cle.description	}
                          </td>
                          <td>
                          {cle.date_creation	}
                          </td>
                          <td>
                          {cle.date_fin_reelle	}
                          </td>
                          <td>
                          {cle.statut	}
                          </td>

                          <td>
                          {
                            Date.parse(cle.date_fin) - Date.parse(cle.date_fin_estimee)>0 &&
                            <span>Accepter</span>
                            }
                             {
                            Date.parse(cle.date_fin) - Date.parse(cle.date_fin_estimee)<0 &&
                            <span>Retards</span>
                            }
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
      <button type="button" style={{float:'right'}} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalMessage">
  Messages
</button>
    </div>
  );
};

export default AfficherHoraireDeveloppeur;
