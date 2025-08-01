import express from 'express'
const router=express.Router()
import {Login,AjoutUtilisateur,Modifier,supprimer,detail,Afficher} from '../Controller/UtilisateursController.js'
// Creation de route Add Article
router.route('/login').post(Login)
router.route('/Utilisateur/Ajout').post(AjoutUtilisateur)
router.route('/Utilisateur/Afficher').get(Afficher)
router.route('/Utilisateur/detail/:id').get(detail)
router.route('/Utilisateur/Modifier/:id').put(Modifier)
router.route('/Utilisateur/delete/:id').delete(supprimer)

export default router