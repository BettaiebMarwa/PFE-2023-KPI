import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AfficherAvisProjets= () => {
const [avis,setAvis]=useState([])

  


// get Clients
async function getKPI(){
  await axios.get("http://localhost:5000/Projet/Avis/Afficher").then(result=>{

      let resultat=result.data.avis
      if(resultat!=''){
        setAvis(resultat)
        console.log(resultat)
      
      }
      
   })
}


// use Effect 
useEffect(()=>{
  getKPI()
},[])
 
return (
    <div>
       <ToastContainer />
       
      <Navbar/>
     {/********* Modal Update Ticket ********** */}


      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Avis des Clients</h4>
                 
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          Client
                        </th>
                        <th>
                          Projet
                            </th>
                        <th>
                          Avis
                        </th>

                        <th>
                          Développeur
                        </th>
                       
                       
                       
                      </thead>
                      <tbody>
                      {avis.map((cle,index)=>(
                        <tr>
                          <td>
                            {cle.nom_client}
                          </td>
                          <td>
                          {'Projet : '+cle.nom_projet + ' créer le '+cle.date_creation	}
                          </td>
                         
                          <td>
                          {cle.avis	}
                          </td>
                          <td>
                          {cle.nom	}
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

export default AfficherAvisProjets;
