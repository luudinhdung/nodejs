const newRoute = require('./news')
const siteRoute = require('./site')
const courseRoute = require('./courses')
const authRoute = require('./auth')
const authMiddleware = require('../app/controllers/middleware/auth.middleware')
function route(app){
    app.use('/user',authRoute)
    app.use('/news',newRoute)
    app.get('/course',authMiddleware.authMiddleware,courseRoute)
    app.use('/:slug',siteRoute)
    app.use('/',authMiddleware.authMiddleware, siteRoute)

    }

module.exports=route