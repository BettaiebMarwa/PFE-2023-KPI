
import express from 'express'
const router=express.Router()
import {AddDeveloppeur,Afficher,Modifier,supprimer,detail} from '../Controller/DeveloppeursController.js'
// Creation de route Add Developpeur
router.route('/Developpeur/Ajout').post(AddDeveloppeur)
router.route('/Developpeur/Afficher').get(Afficher)
router.route('/Developpeur/detail/:id').get(detail)
router.route('/Developpeur/Modifier/:id').put(Modifier)
router.route('/Developpeur/delete/:id').delete(supprimer)

export default router