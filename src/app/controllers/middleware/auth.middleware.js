function authMiddleware(req,res,next){
    if(!req.cookies.user){
        res.redirect('/user/login')
    }
    next()
}
module.exports = {authMiddleware}