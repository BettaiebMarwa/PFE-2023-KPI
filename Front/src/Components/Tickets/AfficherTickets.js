import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Navbar from '../../Navbar';
/********     Toast React  ******** */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AfficherTicket= () => {
  let userConnecte=JSON.parse(localStorage.getItem('user'))
let role=userConnecte.role

const [tickets,setTickets]=useState([])
const [ticket,setTicket]=useState([])
const [discussions,setDiscussion]=useState([])
  const showToastMessage = () => {
    toast.success('Ticket Supprimé avec succée ! ', {
        position: toast.POSITION.TOP_RIGHT
       
    });
    window.location.href='/Ticket/Afficher'
};

const Update = () => {
  toast.success('Ticket Modifié avec succée ! ', {
      position: toast.POSITION.TOP_RIGHT
     
  });
  window.location.href='/Ticket/Afficher'
};
// get Tickets
async function getTickets(){
  await axios.get("http://localhost:5000/Ticket/Afficher").then(result=>{

      let resultat=result.data.tickets
      if(resultat!=''){
      setTickets(resultat)
        console.log(resultat)
      
      }
      
   })
}
// delete Ticket
async function deleteTicket(id){
  await axios.delete("http://localhost:5000/Ticket/delete/"+id).then(result=>{
   showToastMessage()
   })
}
// get Detail Ticket
async function getTicket(id){
  await axios.get("http://localhost:5000/Ticket/detail/"+id).then(result=>{

      let resultat=result.data.ticket
      if(resultat!=''){
      setTicket(resultat)
      console.log('/************************ Détail Ticket d\'id = '+id )
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

// use Effect 
useEffect(()=>{
  getTickets();
  getDiscussion()
},[])
 
/***********************Modifier Ticket ****************** */

async function Modifier(e) {
  e.preventDefault();
  let form =document.getElementById('formTicket')
  const formdata=new FormData(form)
  let titre=formdata.get('titre')
  let description=formdata.get('description')
  let dateCreation=formdata.get('dateCreation')
  let finestimation=formdata.get('finestimation')
  let finreel=formdata.get('finreel')
  let statut=formdata.get('statusTicket')
 let id=formdata.get('id')
 let ticket={titre_ticket:titre,description:description,date_creation:dateCreation,date_fin_estimee:finestimation,date_fin_reelle:finreel,statut:statut}
 console.log('Tickettttttttttttttt')
 console.log(ticket)
 // axios
 await axios.put("http://localhost:5000/Ticket/Modifier/"+id,ticket).then(result=>{

    let resultat=result.data.ticket
    if(resultat!=''){
      Update()
      console.log(resultat)
    
    }
 })

};

/**************************************************** */
  return (
    <div>
       <ToastContainer />
       
      <Navbar/>
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

 
     {/********* Modal Update Ticket ********** */}


<div class="modal fade" id="ModalUpdateTicket" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modifier Ticket</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> 
      <form method='post' id='formTicket'>
      <div class="modal-body">
       <input type='hidden' readOnly name="id" defaultValue={ticket.id}/>
          <div class="mb-3">
            <label for="titre" class="col-form-label">Titre:</label>
            <input type="text" defaultValue={ticket.titre_ticket} class="form-control" name='titre' id="titre"/>
          </div>
          <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description :</label>
          <input type="text" className="form-control" defaultValue={ticket.description} id="desc" name='description' />
        </div>

        <div className="mb-3">
          <label htmlFor="dateCreation" className="form-label">Date Création :</label>
          <input type="date" className="form-control" defaultValue={ticket.date_creation} id="dateCreation" name='dateCreation' />
        </div>
       
        <div className="mb-3">
          <label htmlFor="dateFin" className="form-label">Date Fin estimation :</label>
          <input type="date" className="form-control" defaultValue={ticket.date_fin_estimee} id="dateFin" name='finestimation' />
        </div>
        <div className="mb-3">
          <label htmlFor="dateFinReel" className="form-label">date Fin reel :</label>
          <input type="date" className="form-control" defaultValue={ticket.date_fin_reelle} id="dateFinReel" name='finreel' />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status :</label>
          <input type="text" className="form-control" defaultValue={ticket.statut} id="status" name='statusTicket' />
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
                  <h4 class="card-title ">Tickets</h4>
                 
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          ID
                        </th>
                        <th>
                          Titre
                        </th>
                        <th>
                          Description
                        </th>
                        <th>
                          Date de création
                        </th>
                        <th>
                          Date fin estimee
                        </th>
                        <th>
                          Date fin réel
                        </th>
                        <th>
                         Status
                        </th>
                        {role!='client' &&   <th style={{textAlign:'cender'}}>Action      </th>}
                      </thead>
                      <tbody>
                      {tickets.map((cle,index)=>(
                        <tr>
                          <td>
                            {index+1}
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
                          <td class="text-primary">
                          {cle.date_fin_estimee	}
                          </td>
                          <td>
                          {cle.date_fin_reelle	}
                          </td>
                          <td>
                          {cle.statut	}
                          </td>
                           <td class="td-actions text-left">
                           {role!='client' && 
                           <button class="btn btn-warning" onClick={()=>getTicket(cle.id)} style={{margin:'0 10px 0 0'}} data-bs-toggle="modal" data-bs-target="#ModalUpdateTicket">
                              Modifier
                              
                          </button>
                         }
                           {role!='developpeur' && role!='client' && 
                            <button class="btn btn-danger" onClick={()=>deleteTicket(cle.id)}>
                              Supprimer
                              
                          </button>
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

export default AfficherTicket;
