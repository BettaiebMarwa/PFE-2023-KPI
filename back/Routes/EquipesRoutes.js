
import express from 'express'
const router=express.Router()
import {AddEquipe,getAllEquipes,detail,Modifier,supprimer} from '../Controller/EquipesController.js'
// Creation de route Add Article
router.route('/Equipe/Ajout').post(AddEquipe)
router.route('/Equipe/Afficher').get(getAllEquipes)
router.route('/Equipe/detail/:id').get(detail)
router.route('/Equipe/Modifier/:id').put(Modifier)
router.route('/Equipe/delete/:id').delete(supprimer)

export default router