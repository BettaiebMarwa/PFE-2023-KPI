import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AfficherDiscussions= () => {
const [discussions,setDiscussion]=useState([])
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
async function getDiscussion(){
  await axios.get("http://localhost:5000/Discussion/Afficher").then(result=>{

      let resultat=result.data.discussions
      if(resultat!=''){
        setDiscussion(resultat)
        console.log(resultat)
      
      }
      
   })
}

// use Effect 
useEffect(()=>{
  getDiscussion()
},[])
 
/***********************Modifier Ticket ****************** */



/**************************************************** */
  return (
    <div>
       <ToastContainer />
       
      <Navbar/>
     {/********* Modal Update Ticket ********** */}

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
                          Message
                        </th>
                        <th>
                          User
                        </th>
                        <th>
                          Date
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

export default AfficherDiscussions;
