import express from 'express'
const router=express.Router()
import {Ajout,Afficher} from '../Controller/HorairesTravailController.js'

router.route('/Horaire/Ajout').post(Ajout)
router.route('/Horaire/Afficher').get(Afficher)



export default router