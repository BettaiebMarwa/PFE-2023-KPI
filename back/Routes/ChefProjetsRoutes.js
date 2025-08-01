import express from 'express'
const router=express.Router()
import {Ajout,Afficher,Modifier,detail,supprimer} from '../Controller/ChefProjetController.js'

router.route('/ChefProjet/Ajout').post(Ajout)
router.route('/ChefProjet/Afficher').get(Afficher)
router.route('/ChefProjet/detail/:id').get(detail)
router.route('/ChefProjet/Modifier/:id').put(Modifier)
router.route('/ChefProjet/delete/:id').delete(supprimer)



export default router