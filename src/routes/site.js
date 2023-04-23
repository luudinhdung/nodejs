const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController')
const authMiddleware = require('../app/controllers/middleware/auth.middleware')

router.use('/search', siteController.search)
router.use('/',authMiddleware.authMiddleware, siteController.home)

module.exports=router