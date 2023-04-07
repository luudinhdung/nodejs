const Course = require('../models/Course')
const {handelObj} = require('../../ulti/mongoose')
class CourseController {
  
    show(req,res,next){
        Course.findOne({slug:req.params.slug})
        .then(courses =>
            res.render('course/show',{courses: handelObj(courses)})
        )
        .catch(next)
    }
}

module.exports = new CourseController