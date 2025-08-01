import express from 'express'
import bodyParser from 'body-parser'
import mysql from 'mysql'
//cors 
import cors from "cors";
const app=express()
const port=5000
app.use(bodyParser.urlencoded({extended:true}))
// connexion avec Serveur de BD
let cnx=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'Projet-PFE'
})
// verif connexion
cnx.connect(function(err){
    if(err){console.log('Erreur de connexion')}
    else { console.log('connexion effectué')}
})
global.cnx=cnx
/*** Use cors */
app.use(cors({ origin: "*"}) );
  app.use(bodyParser.json());
// Import All Route
import RouteClient from './Routes/ClientsRoutes.js'
app.use(RouteClient)
// Routes Utilisateur
import RouteUtilisateur from './Routes/UtilisateursRoutes.js'
app.use(RouteUtilisateur)

// Routes Développeur
import RouteDeveloppeur from './Routes/DéveloppeursRoutes.js'
app.use(RouteDeveloppeur)
// Routes Equipe
import RouteEquipe from './Routes/EquipesRoutes.js'
app.use(RouteEquipe)

import RouteTicket from './Routes/TicketsRoutes.js'
app.use(RouteTicket)

import RouteChefProjet from './Routes/ChefProjetsRoutes.js'
app.use(RouteChefProjet)

import RouteHoraire from './Routes/HoraireTravailRoute.js'
app.use(RouteHoraire)

import RouteProjet from './Routes/ProjetRoutes.js'
app.use(RouteProjet)

import RouteDiscussion from './Routes/DiscussionRoutes.js'
app.use(RouteDiscussion)
app.listen(`${port}`,()=>{
    console.log(`App listing port : ${port}`)
})