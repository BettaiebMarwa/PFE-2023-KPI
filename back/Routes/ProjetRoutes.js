import express from 'express'
const router=express.Router()
import {Ajout,Afficher,Modifier,supprimer,detail,AjoutAvis,AfficherAvis} from '../Controller/ProjetsController.js'

router.route('/Projet/Ajout').post(Ajout)
router.route('/Projet/Afficher').get(Afficher)
router.route('/Projet/detail/:id').get(detail)
router.route('/Projet/Modifier/:id').put(Modifier)
router.route('/Projet/delete/:id').delete(supprimer)
router.route('/Projet/Avis').post(AjoutAvis)
router.route('/Projet/Avis/Afficher').get(AfficherAvis)

export default router