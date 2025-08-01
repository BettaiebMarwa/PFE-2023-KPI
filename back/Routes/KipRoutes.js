import express from 'express'
const router=express.Router()
import {Ajout,Afficher} from '../Controller/KpiController.js'

router.route('/Kpi/Ajout').post(Ajout)
router.route('/Kpi/Afficher').get(Afficher)