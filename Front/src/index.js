import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';

 import App from './App';
 import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
 import 'bootstrap/dist/js/bootstrap.js';
 import User from './Authentification/user';
 import Dashboard from './dashboard';
import Equipes from './Components/Equipes/Equipes';
import AfficherEquipes from './Components/Equipes/AfficherEquipes';

import Developpeurs from './Components/Développeurs/Developpeurs';

import Utilisateurs from './Components/Utilisateurs/Utilisateurs';
import AfficherUsers from './Components/Utilisateurs/AfficherUsers';

import AjoutHoraire from './Components/HorairesTravail/AjoutHoraire';
import AfficherHoraire from './Components/HorairesTravail/AfficherHoraire';
import AfficherHoraireDeveloppeur from './Components/HorairesTravail/AfficherHoraireDeveloppeur';

import Administrateur from './Authentification/administrateur';
// import reportWebVitals from './reportWebVitals';
import AjoutTicket from './Components/Tickets/AjoutTicket';
import AfficherTicket from './Components/Tickets/AfficherTickets';

import AjoutChefProjet from './Components/ChefProjets/AjoutChefProjet';
import AfficherChefProjet from './Components/ChefProjets/AfficherChefProjets';

import Projets from './Components/Projets/Projets';
import AfficherProjet from './Components/Projets/AfficherProjet';
import AvisProjet from './Components/Projets/AvisProjet';

import AfficherAvisProjets from './Components/Projets/AfficherAvisProjets';
import Clients from './Components/Clients/Clients';
import AfficherClients from './Components/Clients/AfficherClients';

import Discussions from './Components/Discussions/Discussions';
import AfficherDiscussions from './Components/Discussions/AfficherDiscussions';

import AfficherDeveloppeurs from './Components/Développeurs/AfficherDeveloppeurs';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
     
  <BrowserRouter>
    <Routes>
   <Route path='/' element={<User/>}/>
   <Route path='/dashboard' element={<Dashboard/>}/>
   <Route path='/Equipes' element={<Equipes/>}/>
   <Route path='/Equipe/Afficher' element={<AfficherEquipes/>}/>
  
   <Route path='/Clients' element={<Clients/>}/>
   <Route path='/Clients/Afficher' element={<AfficherClients/>}/>
   <Route path='/utilisateur' element={<Utilisateurs/>}/>
   <Route path='/utilisateur/Afficher' element={<AfficherUsers/>}/>

   <Route path='/Horaire' element={<AjoutHoraire/>}/>
   <Route path='/Horaire/Afficher' element={<AfficherHoraire/>}/>
   <Route path='/Horaire/developpeur' element={<AfficherHoraireDeveloppeur/>}/>

   <Route path='/Projet' element={<Projets/>}/>
   <Route path='/Projet/Afficher' element={<AfficherProjet/>}/>
   <Route path='/Projet/Avis' element={<AvisProjet/>}/>

   <Route path='/admin' element={<Administrateur/>}/>

   <Route path='/KPI' element={<AfficherAvisProjets/>}/>

   <Route path='/Ticket/Ajout' element={<AjoutTicket/>}/>
   <Route path='/Ticket/Afficher' element={<AfficherTicket/>}/>

   <Route path='/Discussion' element={<Discussions/>}/>
   <Route path='/Discussion/Afficher' element={<AfficherDiscussions/>}/>

   <Route path='/ChefProjet/Ajout' element={<AjoutChefProjet/>}/>
   <Route path='/ChefProjet/Afficher' element={<AfficherChefProjet/>}/>

   <Route path='/Developpeur' element={<Developpeurs/>}/>
   <Route path='/Developpeur/Afficher' element={<AfficherDeveloppeurs/>}/>
    </Routes>
  
  </BrowserRouter>
     
 
);

// reportWebVitals();
