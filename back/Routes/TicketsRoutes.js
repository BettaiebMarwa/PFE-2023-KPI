import express from 'express'
const router=express.Router()
import {Ajout,Afficher,Modifier,detail,supprimer} from '../Controller/TicketsController.js'

router.route('/Ticket/Ajout').post(Ajout)
router.route('/Ticket/Afficher').get(Afficher)
router.route('/Ticket/detail/:id').get(detail)
router.route('/Ticket/Modifier/:id').put(Modifier)
router.route('/Ticket/delete/:id').delete(supprimer)



export default router