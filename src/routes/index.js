const newRoute = require('./news')
const siteRoute = require('./site')
const courseRoute = require('./courses')
function route(app){
    app.use('/news',newRoute)
    app.use('/course',courseRoute)
    app.use('/:slug',siteRoute)
    app.use('/',siteRoute)

    }

module.exports=route