import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AfficherProjet= () => {
const [projets,setProjets]=useState([])
const [projet,setProjet]=useState([])
  const showToastMessage = () => {
    toast.success('Projet Supprimé avec succée ! ', {
        position: toast.POSITION.TOP_RIGHT
       
    });
   
};

const Update = () => {
  toast.success('Projet Modifié avec succée ! ', {
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
// delete Ticket
async function deleteProjet(id){
  await axios.delete("http://localhost:5000/Projet/delete/"+id).then(result=>{
   showToastMessage()
   getProjets()
   })
}
// get Detail Ticket
async function detail(id){
  await axios.get("http://localhost:5000/Projet/detail/"+id).then(result=>{

      let resultat=result.data.projet
      if(resultat!=''){
        setProjet(resultat)
     
        console.log(resultat)
      
      }
      
   })
}
// use Effect 
useEffect(()=>{
  getProjets()
},[])
 
/***********************Modifier Ticket ****************** */

async function Modifier(e) {
  e.preventDefault();
  let form =document.getElementById('formProjet')
    const formdata=new FormData(form)
    let nom=formdata.get('nom')
    let description=formdata.get('description')
   let date_creation=formdata.get('date_creation')
   let date_fin_estimee=formdata.get('date_fin_estimee')
   let date_fin_relle=formdata.get('date_fin_relle')

    let id=formdata.get('id')
   
    let projet={nom:nom,description:description,date_creation:date_creation,date_fin_estimee:date_fin_estimee,date_fin_relle:date_fin_relle}
    console.log(projet)

 // axios
 await axios.put("http://localhost:5000/Projet/Modifier/"+id,projet).then(result=>{

    let resultat=result.data.projet
    if(resultat!=''){
      Update()
      getProjets()
     
    
    }
 })

};

/**************************************************** */
  return (
    <div>
       <ToastContainer />
       
      <Navbar/>
     {/********* Modal Update Ticket ********** */}


<div class="modal fade" id="ModalUpdate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier Projet</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> 
      <form method='post' id='formProjet'>
      <div class="modal-body">
       <input type='hidden' readOnly name="id" defaultValue={projet.id}/>
       <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom:</label>
          <input
            type="text"
            className="form-control" defaultValue={projet.nom}
            id="nom"
            name='nom'
            />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Description :</label>
          <input
            type="text"
            className="form-control" defaultValue={projet.description}
            id="email"
            name='description'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mdp" className="form-label">date_creation:</label>
          <input
            type="date"
            className="form-control"
            id="mdp"
            name='date_creation' defaultValue={projet.date_creation}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mdp" className="form-label">date_fin_estimee:</label>
          <input
            type="date"
            className="form-control"
            id="mdp"
            name='date_fin_estimee' defaultValue={projet.date_fin_estimee}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mdp" className="form-label">date fin réel:</label>
          <input
            type="date"
            className="form-control"
            id="mdp"
            name='date_fin_relle' defaultValue={projet.date_fin_relle}
          />
        </div>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
        <button type="submit" class="btn btn-primary" onClick={Modifier}>Modifier</button>
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
                       
                        <th style={{textAlign:'cender'}}>Action      </th>
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
                         
                           <td class="td-actions text-left">
                           <button class="btn btn-warning" onClick={()=>detail(cle.id)} style={{margin:'0 10px 0 0'}} data-bs-toggle="modal" data-bs-target="#ModalUpdate">
                              Modifier
                              
                          </button>
                           
                            <button class="btn btn-danger" onClick={()=>deleteProjet(cle.id)}>
                              Supprimer
                              
                          </button>
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

export default AfficherProjet;
