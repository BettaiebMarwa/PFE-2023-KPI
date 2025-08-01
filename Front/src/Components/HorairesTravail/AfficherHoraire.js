import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AfficherHoraire= () => {
const [horaires,setHoraires]=useState([])
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


// use Effect 
useEffect(()=>{
  getHoraires()
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
                  <h4 class="card-title ">Horaire de travail</h4>
                 
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          ID
                        </th>
                        <th>
                          Date de but
                        </th>
                        <th>
                          Date Fin 
                        </th>
                        <th>
                          Temps passe 
                        </th>
                        <th>
                          Temps estimé
                        </th>

                       
                       
                      
                      </thead>
                      <tbody>
                      {horaires.map((cle,index)=>(
                        <tr>
                          <td>
                            {index+1} 
                          </td>
                          <td>
                          {cle.date_debut	}
                          </td>
                          <td>
                          {cle.date_fin	}
                          </td>
                         
                          <td>
                          {cle.temps_passe	}
                          </td>
                          <td>
                          {cle.estime_temps	}
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

export default AfficherHoraire;
