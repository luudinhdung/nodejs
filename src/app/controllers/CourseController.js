const Course = require('../models/Course')
const {handelObj, handelArr} = require('../../ulti/mongoose')

class CourseController {

    show(req,res,next){
        Course.findOne({slug:req.params.slug})
        .then(courses =>
            res.render('course/show',{courses: handelObj(courses)})
        )
        .catch(next)
    }
    create(req,res,next){
       res.render('course/create')
    }
    store(req,res,next){
        const form_data = req.body
        form_data.image=`https://files.fullstack.edu.vn/f8-prod/courses/${req.body.IdImage}.png`
        const course = new Course(form_data)
        res.json(form_data)
        course.save()
        .then(()=>res.redirect('/'))
        .catch(error=>{
        })
         }
    stored(req,res,next){
        Promise.all([  Course.find({}),  Course.countDocumentsDeleted()])
        .then(([courses,documentDeleted])=>{
            const course = courses.map(course =>course.toObject())
            res.render('course/me',{
                documentDeleted,
                 course : course
            })
        })
       
    }
    edit(req,res,next){
        Course.findById(req.params.id)
        .then(courses =>res.render('course/edit',{courses : handelObj(courses)})
        )
        .catch(next)

    }

    update(req,res,next){
        Course.updateOne({_id:req.params.id},req.body)
        .then(()=>res.redirect('/me'))
        .catch(next)

    }

    delete(req,res,next){
        Course.delete({_id:req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
    }
    destroy(req,res,next){
        Course.deleteOne({_id:req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
    }

    deleted(req,res,next){
        Course.findDeleted()
        .then(courses =>
            {
                const course = courses.map(course =>course.toObject())
                res.render('course/trash',{ course : course})
            }
        )
        .catch(next)
    }

    restord(req,res,next){
        Course.restore({_id:req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
    }
    actionForm(req,res,next){
        switch(req.body.active){
            case 'delete':
                Course.delete({_id:{$in : req.body.courseIds}})
                .then(()=>res.redirect('back'))
                .catch(next)
            break;
            default :
            res.json('error 400')
        }
    }
    
}

module.exports = new CourseController