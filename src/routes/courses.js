const express = require('express')
const router = express.Router()
const CourseController = require('../app/controllers/CourseController')
const authMiddleware = require('../app/controllers/middleware/auth.middleware')

router.get('/:id/edit', CourseController.edit)
router.delete('/:id', CourseController.delete)
router.delete('/:id/force', CourseController.destroy)
router.get('/create',authMiddleware.authMiddleware, CourseController.create)
router.post('/actionForm', CourseController.actionForm)

router.put('/:id', CourseController.update)
router.patch('/:id/restord', CourseController.restord)
router.get('/me/stored/trash', CourseController.deleted)
router.get('/me', CourseController.stored)
router.post('/store', CourseController.store)
router.get('/:slug', CourseController.show)

module.exports=router