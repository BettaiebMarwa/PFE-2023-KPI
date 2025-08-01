import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AvisProjet= () => {
  let userConnecte=JSON.parse(localStorage.getItem('user'))
let idClient=userConnecte.id
///console.log('Id Client '+idClient)

const [projets,setProjets]=useState([])
const [projet,setProjet]=useState([])
const [idProjet,setIdProjet]=useState("")


  const showToastMessage = () => {
    toast.success('Projet Supprimé avec succée ! ', {
        position: toast.POSITION.TOP_RIGHT
       
    });
   
};

const Ajout = () => {
  toast.success('Avis Ajouté avec succée ! ', {
      position: toast.POSITION.TOP_RIGHT
     
  });
 
};


// get Clients
async function getProjets(){
  await axios.get("http://localhost:5000/Projet/Afficher").then(result=>{

      let resultat=result.data.projets
      if(resultat!=''){
        setProjets(resultat)
        console.log(resultat)
      
      }
      
   })
}
 
// use Effect 
useEffect(()=>{
  getProjets()
},[])
 
/***********************Modifier Ticket ****************** */

async function AjoutAvis(e) {
  e.preventDefault();
  let form =document.getElementById('formProjet')
    const formdata=new FormData(form)
    let projet=formdata.get('projet')
    let client=formdata.get('client')
   let avis=formdata.get('avis')
   

   
    let avisProjet={projet:projet,client:client,avis:avis}
   console.log('Avis Projet ')
console.log(avisProjet)
 // axios
 await axios.post("http://localhost:5000/Projet/Avis",avisProjet).then(result=>{

    let resultat=result.data.avis
    if(resultat!=''){
      Ajout()
      getProjets()
     
    
    }
 })

};

/**************************************************** */
  return (
    <div>
       <ToastContainer />
       
      <Navbar/>
      {/**************** Modal Avis*** */}
     

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form method='post' onSubmit={AjoutAvis} id='formProjet'>
      <div class="modal-body">
      
          <div class="mb-3">
          
            <input type="hidden" name='projet' defaultValue={idProjet} class="form-control" id="dev"/>
            <input type="hidden" name='client' defaultValue={idClient} class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text" name='avis'></textarea>
          </div>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save changes</button>
      </div>
      </form>
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
                  <h4 class="card-title ">Projets</h4>
                 
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          Nom
                        </th>
                        <th>
                          Description
                            </th>
                        <th>
                          Date creation
                        </th>

                        <th>
                          Date Fin estimation
                        </th>
                        <th>
                          Date fin réel
                        </th>
                       
                        <th style={{textAlign:'cender'}}>Equipe      </th>
                        <th style={{textAlign:'cender'}}>Développeur      </th>
                        <th style={{textAlign:'cender'}}>Avis      </th>
                      </thead>
                      <tbody>
                      {projets.map((cle,index)=>(
                        <tr>
                          <td>
                            {cle.nom_projet}
                          </td>
                          <td>
                          {cle.description	}
                          </td>
                          <td>
                          {cle.date_creation	}
                          </td>
                          <td>
                          {cle.date_fin_estimee	}
                          </td>
                          <td>
                          {cle.date_fin_relle	}
                          </td>
                          <td>
                          {cle.nom_equipe	}
                          </td>
                          <td>
                          {cle.nom	}
                          </td>
                          <td>
                          <button type='button' className='btn btn-primary' onClick={()=>setIdProjet(cle.id_projet)} data-bs-toggle="modal" data-bs-target="#exampleModal">Ajouter votre avis</button>
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

export default AvisProjet;
