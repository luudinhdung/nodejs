const engine = require('express-handlebars')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const route = require('./routes/index')
const db = require('./config/db')
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs',engine.engine({
  extname:'hbs'
}));
db.connect()
route(app)
app.set('view engine', 'hbs');
app.set('views', 'src/rescouce/views');


app.listen(3000)


