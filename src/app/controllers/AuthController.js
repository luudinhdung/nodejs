const { token } = require('morgan')
const User = require('../models/User')

class AuthController {
    login(req,res){
        res.render('auth/login')
    }
    logining(req,res,next){
        const userName = req.body.name
        const password = req.body.password
        const error='error'
        User.findOne({
            userName:userName,
            password:password
        })
        .then(data=>
           { 
            if(data){
                res.cookie('user',data._id)
                res.redirect('/me')
            }else{
                console.log(data);
                res.render('auth/login',{
                    error
                })
            }
        }
            )
        .catch(next)
    }
    resigst(req,res,next){
        res.render('auth/resigst')
    }
    resigsted(req,res,next){
        const userName = req.body.name
        const password = req.body.password
        User.findOne({
            userName:userName,
        })    
        .then((data)=>{
            if(data){
                res.json('tai khoan da ton tai')
            }else{
               
                const user = new User({userName,password})
                user.save()
                .then(()=>res.json('dang ki thanh cong'))
                .catch(error=>{
                })
        
            }
        })
      
    }
    logouted(req,res,next){
        res.status(200).clearCookie('user', {
          path: '/'
        });
        req.session.destroy(function (err) {
          res.redirect('/');
        });

    }
}

module.exports = new AuthController