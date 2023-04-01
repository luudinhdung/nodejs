const engine = require('express-handlebars')
const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))
app.engine('hbs',engine.engine({
  extname:'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/rescouce/views');
app.get('/', function (req, res) {
  res.render('home')
})
app.get('/news', function (req, res) {
  res.render('news')
})

app.listen(3000)


