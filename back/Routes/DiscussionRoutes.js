import express from 'express'
const router=express.Router()
import {Ajout,Afficher,AfficherEtatNon,displayDiscussion,delletAllDiscussion} from '../Controller/DiscussionController.js'
// Creation de route Add Article

router.route('/Discussion/Ajout').post(Ajout)
router.route('/Discussion/Afficher').get(Afficher)
router.route('/Discussion/AfficherEtatNon').get(AfficherEtatNon)
router.route('/Discussion/Display').get(displayDiscussion)
router.route('/Discussion/deleteAll').get(delletAllDiscussion)



export default router