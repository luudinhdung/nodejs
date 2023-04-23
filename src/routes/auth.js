const express = require('express')
const router = express.Router()
const AuthController = require('../app/controllers/AuthController')

router.get('/login',AuthController.login)
router.post('/logining',AuthController.logining)
router.get('/resigst',AuthController.resigst)
router.post('/resigsted',AuthController.resigsted)
router.get('/logouted',AuthController.logouted)

module.exports=router