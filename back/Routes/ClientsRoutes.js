
import express from 'express'
const router=express.Router()
import {AddClient,AfficherClient,detail,Modifier,supprimer} from '../Controller/ClientController.js'
// Creation de route Add Article
router.route('/Client/Ajout').post(AddClient)
router.route('/Client/Afficher').get(AfficherClient)
router.route('/Client/detail/:id').get(detail)
router.route('/Client/Modifier/:id').put(Modifier)
router.route('/Client/delete/:id').delete(supprimer)

export default router