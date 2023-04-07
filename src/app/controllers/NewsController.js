
class NewsController {
    index(req,res){
        res.render('news')
        
    }
    show(req,res){
        res.send('keke')
    }
}

module.exports = new NewsController